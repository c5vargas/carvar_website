import './button.css'

interface Props {
	label: string,
	tag?: string
	onClick: () => void
}

export function ButtonPrimary({ label, tag = 'CARVAR', onClick}: Props) {
	return (
		<button className="cybr-btn" onClick={onClick}>
			{ label }<span aria-hidden>_</span>
			<span aria-hidden className="cybr-btn__glitch">{ label }</span>
			<span aria-hidden className="cybr-btn__tag">{ tag }</span>
		</button>
	)
}