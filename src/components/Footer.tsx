import Container from "./Container";


export default function Footer() {
    return (
        <footer className="bg-primary text-white/60">
            <Container>
                <div className="flex flex-col">
                    <div className="w-full flex flex-col md:flex-row gap-20 py-15">
                        <div className="flex-2">
                            <h2 className="text-2xl text-white font-bold py-3">HIPLANDO</h2>
                            <p>Your premier destination for horse trading, transport services, and equestrian competitions.</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg text-white font-bold pb-3">Quick Links</h3>
                            <ul className="flex flex-col gap-0.5">
                                <li>Horse Market</li>
                                <li>Transport</li>
                                <li>Competitions</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg text-white font-bold pb-3">Support</h3>
                            <ul className="flex flex-col gap-0.5">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Membership</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between py-4 md:items-center">
                        <div>2025 Hiplando. All rights reserved.</div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                Language
                                <select className="p-2 bg-white/10 rounded-lg" name="" id="">
                                    <option value="">EN</option>
                                    <option value="">AR</option>
                                </select>
                            </div>

                            <ul className="flex gap-2 items-center">
                                <li>WhatsApp</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}