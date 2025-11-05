import Container from "@/components/container";
import { PropsWithChildren } from "react";

export default function LightSection(props: PropsWithChildren) {
    return (
        <div className="bg-white dark:bg-neutral-900 py-35">
            <Container>
                {props.children}
            </Container>
        </div>
    )
}