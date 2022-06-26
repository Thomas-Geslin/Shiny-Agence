import picture from '../assets/home_picture.png'
import { useTheme } from '../utils/hooks/hooks'

import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HomeContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

export default function Home() {
    const { theme } = useTheme()

    return(<div className='home'>
                <HomeContainer className='home__content' theme={theme}>
                    <div>
                        <StyledTitle className='home__content__presentation' theme={theme}>Repérez vos besoins,<br/>on s’occupe du reste,<br/>avec les meilleurs<br/>talents</StyledTitle>
                        <Link to='/survey/1'><button className='home__content__button'>Faire le test</button></Link>
                    </div>
                
                    <img src={picture} alt='fond' className='home__content__picture'/>    
                </HomeContainer>
            </div>)
}