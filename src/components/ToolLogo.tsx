export default function ToolLogo({ logo, label, link }: { logo: string, label: string, link: string }) {
    return (
        <li className="tool-logo">
            <a href={link}>
            <img src={logo} title={label} />
            </a>
        </li>
    )
}
