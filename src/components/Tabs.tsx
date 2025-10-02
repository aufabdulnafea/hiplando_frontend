'use client';
import { useState } from "react";

interface Tab {
    label: string;
    content: React.ReactNode;
}

export default function Tabs(props: { tabs: Tab[] }) {
    const [selectedTabLabel, setSelectedTabLabel] = useState(props.tabs[0].label);

    return (
        <div>
            <div className="bg-tabs-background-light flex rounded-full p-2 gap-2 border border-zinc-200 mb-5 shadow-inner">
                {props.tabs.map(tab => (
                    <button
                        key={tab.label}
                        onClick={() => setSelectedTabLabel(tab.label)}
                        className={`py-3 flex-1 rounded-full ${tab.label === selectedTabLabel ? 'shadow font-bold bg-white' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {props.tabs.find(tab => tab.label === selectedTabLabel)?.content}
            </div>
        </div>
    );
}

