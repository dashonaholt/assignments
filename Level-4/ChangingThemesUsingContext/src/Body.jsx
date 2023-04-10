import React, {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'

export default function Body(props){
    const {color} = useContext(ThemeContext)
    return ( 
    <div className= {`${color}-theme`}>
        <h2 className="body-text">{color} theme displayed</h2>
        <p className="body">
        </p>

    </div>
        
    )
}