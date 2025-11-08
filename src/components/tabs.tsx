'use client';

import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface Tab {
    label: string;
    content: JSX.Element;
}

export function TabsComponent(props: { tabs: Tab[] }) {
    return (
        <Tabs
            className="w-full"
            defaultValue={props.tabs[0].label.split(" ").join("-")}
        >
            <TabsList className="w-full rounded-full h-12 p-1 gap-1 bg-neutral-200/60 dark:bg-neutral-800">
                {props.tabs.map(el => (
                    <TabsTrigger
                        className="rounded-full aria-selected:font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700"
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

