import React, {useState, createContext} from "react"

//themeCoontext is to be able to use this context anywhere without passing through props
export const ThemeContext = createContext()

export default function ThemeProvider(props) {
    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return(
        //everything i would like to pass through the value objects functions
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {/* props.children helps to pass in any added values to the children (color, toggle, etc) */}
            {props.children}
            </ThemeContext.Provider>
    )
    }
    //export {ThemeProvider, Provider}