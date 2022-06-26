import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context/context'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
        margin: 0;  
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}