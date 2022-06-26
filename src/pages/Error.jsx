import error from '../assets/error404.png'
import { useTheme } from '../utils/hooks/hooks'

import styled from 'styled-components'

const ErrorContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const ErrorMsg = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ErrorText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

export default function Error() {
    const { theme } = useTheme();
    return (
        <ErrorContainer className='error' theme={theme}>
            <ErrorMsg className='error__title' theme={theme}>Oups...</ErrorMsg>
            <img src={error} alt="fond de la page d'erreur" />
            <ErrorText className='error__text' theme={theme}>Il semblerait qu'il y ait un problème</ErrorText>
        </ErrorContainer>
    )
}