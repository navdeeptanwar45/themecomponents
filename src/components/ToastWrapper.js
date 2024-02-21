import React from 'react'
import { useToastContext} from '../Contexts/toast'
import Toast from './Toast'

const ToastWrapper = ({orientation}) => {
  const {state,ToastContextAction} = useToastContext()
  return (
    <div className={'toast-wrapper-main '+orientation}>
      <Toast/> 
      <button onClick={()=>ToastContextAction.add('new toast')}> add</button>
    </div>
  )
}

export default ToastWrapper
