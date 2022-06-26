import logo from '../assets/Vector.png'
import { useTheme } from '../utils/hooks/hooks'

import styled from 'styled-components'
import { Link } from "react-router-dom";

const HeaderTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const HeaderNav = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#8186A0' : '#ffffff')};
`

export default function Header() {
    const { theme } = useTheme()

    return(<div className='header'>
                <div className='header__brand'>
                    <img src={logo} alt="logo de l'entreprise" className='header__brand__logo'/>
                    <HeaderTitle className='header__brand__text' theme={theme}>Shiny</HeaderTitle>
                </div>
                    
                <div className='header__nav'>
                    <ol className='header__nav__list'>
                        <li><HeaderNav to ="/" className='header__nav__list__part' theme={theme}>Acceuil</HeaderNav></li>
                        <li><HeaderNav to ="/freelances"  className='header__nav__list__part' theme={theme}>Profils</HeaderNav></li>
                        <li><HeaderNav to ="/survey/1" className='header__nav__list__button'>Faire le test</HeaderNav></li>
                    </ol>
                </div>
            </div>)
}