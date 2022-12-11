import './dropdown.scss'
import { useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import clsx from 'clsx'

interface DropdpwnProps {
  content: React.ReactNode
  position?: 'left' | 'right'
}
export function Dropdown(props: DropdpwnProps) {
  const { position, content } = props
  const [isOpening, setIsOpening] = useState<boolean>(false)
  const handleDropdown = () => {
    setIsOpening((prev) => !prev)
  }
  return (
    <div className='dropdown-container' onClick={handleDropdown}>
      <BiDotsVerticalRounded width={40} height={40} />
      {isOpening && (
        <div className={clsx('content-container', position ?? 'left')}>
          <div className='contain-wrapper'>{content}</div>
        </div>
      )}
    </div>
  )
}
