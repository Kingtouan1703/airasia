import ActiveButton from '../../components/active-button/active-button'
import { TeamCard } from '../../components/team-card/team-card'
import { fakeMembers, LabelButton } from './home.config'
import './home.scss'
export default function Home() {
  return (
    <div className='page-container team-info-container'>
      {/* title and active button */}
      <div className='team-info-title'>
        <label className='title'>Team information</label>
        <div className='active-button-container'>
          {LabelButton.map((item, index) => {
            return (
              <div key={index}>
                <ActiveButton
                  icon={item.icon}
                  size={item.size ?? 'md'}
                  disable={item.disable ?? false}
                  className={item.className}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='team-cards-container'>
        {fakeMembers.map((members) => {
          return (
            <div>
              <TeamCard {...members} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
