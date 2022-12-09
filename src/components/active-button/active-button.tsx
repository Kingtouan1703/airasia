import clsx from 'clsx'
import './active-button.scss'

interface ActiveButtonProps {
  icon?: React.ReactNode
  onClick?: (data: any) => void
  size?: 'md' | 'lg'
}

export default function ActiveButton(props: ActiveButtonProps) {
  const { icon, onClick, size } = props

  const handleOnClick = () => {
    onClick && onClick
  }

  return (
    <div className={clsx('button-container', { size: size })} onClick={handleOnClick}>
      {icon}
    </div>
  )
}
