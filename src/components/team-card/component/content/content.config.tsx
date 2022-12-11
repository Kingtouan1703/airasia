import { CiEdit } from 'react-icons/ci'
import { TiExport } from 'react-icons/ti'
import { RiSendPlaneFill, RiDeleteBinFill } from 'react-icons/ri'

export const actionsButton = [
  {
    icon: <CiEdit size={20} />,
    title: 'Edit',
  },
  {
    icon: <TiExport size={20} />,
    title: 'Export',
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    title: 'Send',
  },
  {
    icon: <RiDeleteBinFill size={20} />,
    title: 'Delete',
  },
]
