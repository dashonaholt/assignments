import React, {useState} from 'react'
import ThemeProvider from "./ThemeProvider"
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'


export default function App(props) {

  return (
    //wrapping everything inside of my theme provider so that they can have access to the set values in the theme provider file
   <ThemeProvider>
    <Navbar />
    <Body />
    <Footer />
   </ThemeProvider>
   
  )
}


