export default function PageBackground(props) {
    return <div className={`min-w-screen min-h-screen text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 ${props.className ?? ''}`}>{props.children}</div>
}
