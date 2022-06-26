import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

export default function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)

    return(<div className="footer">
                <button onClick={() => toggleTheme()} className="footer__button">Changer de mode : {theme === 'light' ? '🌙' : '☀️'}</button>
            </div>)
}