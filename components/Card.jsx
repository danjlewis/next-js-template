export default function Card(props) {
    return (
        <div className={`m-${props.margin ?? 4} p-${props.padding ?? 4} bg-gray-200 dark:bg-gray-700 rounded-2xl filter drop-shadow-sm ${props.className ?? ''}`}>{props.children}</div>
    );
}
