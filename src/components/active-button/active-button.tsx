import clsx from 'clsx'
import './active-button.scss'

interface ActiveButtonProps {
  icon: React.ReactNode
  onClick?: (data: any) => void
  size?: 'md' | 'lg'
  className?: string
  disable?: boolean
  
}

export default function ActiveButton(props: ActiveButtonProps) {
  const { icon, onClick, size, className, disable } = props
  return (
    <div
      className={clsx('button-container', size ?? 'md', className, { disable: disable })}
      onClick={onClick}>
      {icon}
    </div>
  )
}
