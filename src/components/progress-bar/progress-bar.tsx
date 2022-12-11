import clsx from 'clsx'
import { TaskBarColor } from './process-bar.config'
import './progress-bar.scss'

interface ProgressBarProps {
  color?: TaskBarColor
  estimate_percent?: number
}

export function ProgressBar(props: ProgressBarProps) {
  const { color, estimate_percent } = props
  return (
    <div className='progress-bar-container'>
      <div
        className={clsx('percent-container', color ?? 'green')}
        style={{ width: `${estimate_percent ? estimate_percent : 0}%` }}></div>
    </div>
  )
}
