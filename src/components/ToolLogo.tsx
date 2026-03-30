export default function ToolLogo({ logo, label, link, selected, onHover, onExitHover }: { logo: string, label: string, link: string, selected: boolean, onHover: () => void, onExitHover: () => void }) {
    return (
        <div className={'tool-logo' + (selected ? ' selected' : '')} onMouseEnter={onHover} onMouseLeave={onExitHover}>
            <a href={link} target="_blank">
            <img src={logo} title={label} />
            </a>
            <span className="corner-icon material-symbols-outlined">open_in_new</span>
        </div>
    )
}
