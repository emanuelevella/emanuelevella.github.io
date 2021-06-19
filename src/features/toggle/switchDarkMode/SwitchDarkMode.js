import Switch from '../switch/Switch'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsToggled, toggle } from './switchDarkModeSlice';
  

export default function SwitchDarkMode() {
    const isToggled = useSelector(selectIsToggled)
    const dispatch = useDispatch()

    return (
        <Switch id="toggle-dark-mode" checked={isToggled} onChange={() => dispatch(toggle())}/>
    )
}