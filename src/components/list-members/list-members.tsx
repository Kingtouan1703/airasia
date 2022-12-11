import clsx from 'clsx'
import { MemberInfo } from './lis-memers.config'
import './list-members.scss'
interface LisetMemberProps {
  members: MemberInfo[]
  link_explore: string
  max_display?: number
}
export function ListMembers(props: LisetMemberProps) {
  const { members, link_explore, max_display = 3 } = props
  const maxAvatar = members.slice(0, max_display)
  return (
    <div className='list-members-container'>
      <div className='members-avatar-container '>
        {maxAvatar.map((item, index) => {
          const { src, name } = item
          return (
            <div className={clsx('avatar-container', { first: index === 0 })}>
              <img className='member-img' src={src} alt={name} />
            </div>
          )
        })}
        {members.length > maxAvatar.length && (
          <div className='avatar-container more'>{members.length - maxAvatar.length}+</div>
        )}
      </div>
      <a href={link_explore} className='link-title'>Explore Team</a>
    </div>
  )
}
