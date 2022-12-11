import clsx from 'clsx'
import './team-image.scss'
interface TeamImage {
  src: string
  status?: 'on' | 'off'
  size?: 'lg' | 'md'
}
export function TeamImage(props: TeamImage) {
  const { src, status, size } = props
  return (
    <div className={clsx('team-image-containter', size ?? 'md')}>
      <img className='member-img' src={src} />
      <div className={clsx('user-status', status ?? 'on')}></div>
    </div>
  )
}
