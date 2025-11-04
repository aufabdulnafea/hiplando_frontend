'use client';

import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Tab {
    label: string;
    content: JSX.Element;
}

export default function TabsComponent(props: { tabs: Tab[] }) {
    return (
        <Tabs
            className="w-full"
            defaultValue={props.tabs[0].label.split(" ").join("-")}
        >
            <TabsList className="w-full rounded-full h-14 p-1.5 gap-1">
                {props.tabs.map(el => (
                    <TabsTrigger
                        className="rounded-full"
                        key={el.label.split(" ").join("-")}
                        value={el.label.split(" ").join("-")}
                    >
                        {el.label}
                    </TabsTrigger>
                ))}

            </TabsList>

            {props.tabs.map(el => (
                <TabsContent
                    key={el.label.split(" ").join("-")}
                    value={el.label.split(" ").join("-")}
                >
                    {el.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}

