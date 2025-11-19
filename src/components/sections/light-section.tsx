import { Container } from "@/components/container";
import { PropsWithChildren } from "react";

export function LightSection(props: PropsWithChildren) {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-950 py-35">
            <Container>
                {props.children}
            </Container>
        </div>
    )
}