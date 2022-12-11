import { AiOutlineCopy, AiOutlineDownload, AiOutlineSetting } from 'react-icons/ai'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { TaskBarColor } from '../../components/progress-bar/process-bar.config'
export enum SizeButton {
  LARGE = 'lg',
  MEDIUM = 'md',
}
export const LabelButton = [
  {
    icon: <AiOutlineCopy size={24} />,
    size: SizeButton.LARGE,
    disable: false,
    className: 'mr-3',
  },
  {
    icon: <AiOutlineDownload size={24} />,
    size: SizeButton.LARGE,
    disable: false,
    className: 'mr-3',
  },
  {
    icon: <AiOutlineSetting size={24} />,
    size: SizeButton.LARGE,
    disable: false,
    className: 'mr-3',
  },
  {
    icon: <BiMessageRoundedAdd size={20} />,
    size: SizeButton.LARGE,
    className: 'mr-3',
    disable: false,
  },
]

export const fakeMembers = [
  {
    user_name: 'wquna',
    user_img:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    user_role: 'ceo',
    position: 'abc',
    task_color: TaskBarColor.GREEN,
    estimate_percent: 20,
  },
  {
    user_name: 'wquna',
    user_img:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    user_role: 'ceo',
    position: 'abc',
    task_color: TaskBarColor.YELLOW,
    estimate_percent: 100,
  },
  {
    user_name: 'wquna',
    user_img:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    user_role: 'ceo',
    position: 'abc',
    task_color: TaskBarColor.GREEN,
    estimate_percent: 100,
  },
  {
    user_name: 'wquna',
    user_img:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    user_role: 'ceo',
    position: 'abc',
    task_color: TaskBarColor.BLUE,
    estimate_percent: 100,
  },
  {
    user_name: 'wquna',
    user_img:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    user_role: 'ceo',
    position: 'abc',
    task_color: TaskBarColor.PIRPLE,
    estimate_percent: 100,
  },
]
