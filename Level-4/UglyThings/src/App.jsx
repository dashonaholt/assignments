import React, {useEffect, useContext, useState} from 'react'
import Navbar from "./Navbar"
import {UglyContextProvider} from "./UglyContext"
import Forms from "./Forms"
import Uglylist from './Uglylist'
import List from './List'


export default function App(props) {

  return ( // returning the context component and making navbar and 
          //forms children of the component so they can share state and functionality 
    
      <div>
        <UglyContextProvider>
        <Navbar />
        <Forms />
        <List />
        <Uglylist />
        </UglyContextProvider>
      </div>
  )
}


