import { actionsButton } from './content.config'
import './content.scss'

export function Content() {
  return (
    <div className='dropdown-content'>
      {actionsButton.map((item, index) => {
        return (
          <div key={index} className='row'>
            <div className='icon-container '>{item.icon}</div>
            <div className='title'>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}
