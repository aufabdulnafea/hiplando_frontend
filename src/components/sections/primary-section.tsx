import { Container } from "@/components/container";
import { PropsWithChildren } from "react";

export function PrimarySection(props: PropsWithChildren) {
    return (
        <div className="bg-primary text-primary-foreground/60 py-20">
            <Container>
                {props.children}
            </Container>
        </div>
    )
}