import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'

function Footer(props){

const {color, toggleTheme} = useContext(ThemeContext)

return (
    <button onClick={toggleTheme} className={`${color}-theme`}>CLICK TO CHANGE THEME</button>
)
}
export default Footer;