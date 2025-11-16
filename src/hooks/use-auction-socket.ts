import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";

interface AuctionState {
    highestBid: number;
    highestBidder: string;
    status: string;
}

interface NewBidEvent {
    highestBid: number;
    userId: string;
}

export default function useAuctionSocket(auctionId: string) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [auctionState, setAuctionState] = useState<AuctionState | null>(null);
    const [highestBid, setHighestBid] = useState<number | null>(null);

    useEffect(() => {
        if (!auctionId) return;

        const s = io(SOCKET_URL, { transports: ["websocket"] });

        setSocket(s);

        s.emit("join-auction", auctionId);

        s.on("auction-state", (data: AuctionState) => {
            setAuctionState(data);
            setHighestBid(data.highestBid);
        });

        s.on("new-bid", (data: NewBidEvent) => setHighestBid(data.highestBid));

        return () => {
            s.disconnect();
        };
    }, [auctionId]);

    const placeBid = (amount: number, userId: string) => {
        socket?.emit("place-bid", { auctionId, amount, userId });
    };

    return { socket, auctionState, highestBid, placeBid };
}
