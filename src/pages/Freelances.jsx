import Card from '../components/Card'
import Loader from '../components/Loader'
import { useFetch, useTheme } from '../utils/hooks/hooks'

import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#8186A0' : '#ffffff')};
`

export default function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)

  const freelancersList = data?.freelancersList

  if (error) return <span>Il y a un problème</span>

  return(<div className='freelances'>
            <StyledTitle className='freelances__title' theme={theme}>Trouvez votre prestataire</StyledTitle>
            <StyledText className='freelances__text' theme={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledText>
                
            {isLoading ? (<Loader />)
                       : (<div className='freelances__person'>
                            {freelancersList.map((profile, index) => (
                                <Card
                                    key={`${profile.name}-${index}`}
                                    id={profile.id}
                                    label={profile.job}
                                    picture={profile.picture}
                                    title={profile.name}
                                />         
                            ))}
                          </div>)}
            </div>)
}