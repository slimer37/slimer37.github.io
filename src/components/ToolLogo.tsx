export default function ToolLogo({ logo, label, link, onHover, onExitHover }: { logo: string, label: string, link: string, onHover: () => void, onExitHover: () => void }) {
    return (
        <li className="tool-logo" onMouseEnter={onHover} onMouseLeave={onExitHover}>
            <a href={link}>
            <img src={logo} title={label} />
            </a>
        </li>
    )
}
