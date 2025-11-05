

export interface SectionHeaderProps {
    title: string;
    description: string
}

export default function SectionHeader(props: SectionHeaderProps) {
    return (
        <div className="text-center max-w-xl m-auto">
            <h3 className="text-primary text-3xl font-bold lg:font-extrabold pb-3">{props.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-500 text-md">{props.description}</p>
        </div>
    )
}