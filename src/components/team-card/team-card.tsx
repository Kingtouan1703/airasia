import ActiveButton from '../active-button/active-button'
import { Dropdown } from '../dropdown/dropdown'
import { dummiesData } from '../list-members/lis-memers.config'
import { ListMembers } from '../list-members/list-members'
import { ProgressBar } from '../progress-bar/progress-bar'
import { TeamImage } from '../team-image/team-image'
import './team-card.scss'
import { AiFillSkype, AiFillLinkedin, AiOutlineMessage } from 'react-icons/ai'
import { TaskBarColor } from '../progress-bar/process-bar.config'
import { Content } from './component/content/content'

interface TeamCardProps {
  user_name: string
  user_img: string
  user_role: string
  position: string
  estimate_percent: number
  task_color?: TaskBarColor
}




export function TeamCard(props: TeamCardProps) {
  const { user_img, user_role, position, user_name, estimate_percent, task_color } = props
  return (
    <div className='team-card-wrapper'>
      <div className='header'>
        {/* user info container  */}
        <TeamImage src={user_img}></TeamImage>
        {/* dropdown button  */}
        <Dropdown content={<Content/>} />
        {/* infor */}
      </div>
      <div className='sub-info-container'>
        <div className='name'>{user_name}</div>
        <div className='location'>{position}</div>
      </div>
      <div className='contract-container'>
        <div className='work-contract'>
          <ActiveButton icon={<AiFillSkype />} size='md' disable className='mr-3'></ActiveButton>
          <ActiveButton icon={<AiFillLinkedin />} size='md' disable></ActiveButton>
        </div>
        <ActiveButton icon={<AiOutlineMessage />} size='md' disable></ActiveButton>
      </div>
      <div className='role-container'>
        <div className='label'>POSITION</div>
        <label className='role'>{user_role}</label>
      </div>
      <div className='task-container'>
        <div className='label'>TASK</div>
        <ProgressBar estimate_percent={estimate_percent} color={task_color ?? TaskBarColor.GREEN} />
      </div>
      <ListMembers members={dummiesData} link_explore='https://www.youtube.com/'></ListMembers>
    </div>
  )
}
