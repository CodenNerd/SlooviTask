export interface IButton {
    label: any,
    type?: 'submit' | 'button' | 'reset',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    theme?: 'success-solid' | 'neutral-boundriless'
}