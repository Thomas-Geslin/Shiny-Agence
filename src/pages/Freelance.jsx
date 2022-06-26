import Loader from '../components/Loader'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFetch, useTheme } from '../utils/hooks/hooks'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


const FreelanceContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const StyledName = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#ffffff')};
`

const StyledText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#ffffff')};
`

const FreelanceSkills = styled.div`
  border: ${({ theme }) => (theme === 'light' ? 'black 1px solid' : 'white 1px solid')};
`

const FreelanceLocation = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#8186A0' : '#ffffff')};
`


export default function Freelance() {
    const { theme } = useTheme()

    const { freelanceId } = useParams()

    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelance?id=${freelanceId}`)

    const freelanceInfo = data?.freelanceData

    if (error) return <span>Il y a un problème</span>

    return(<div>
                {isLoading ? (<Loader />)
                           : (<FreelanceContainer theme={theme} className='freelance'>
                                    <img src={freelanceInfo.picture} alt='à remplir' className='freelance__picture' />

                                    <div className='freelance__description'>
                                        <StyledName theme={theme} className='freelance__description__name'>{freelanceInfo.name}</StyledName>
                                        <StyledText theme={theme} className='freelance__description__job'>{freelanceInfo.job}</StyledText>
                    
                                        <div className='freelance__description__skills'>
                                            {freelanceInfo.skills.map((skill) => <FreelanceSkills theme={theme} className='freelance__description__skills__box'>
                                                <StyledText theme={theme} className='freelance__description__skills__box__text'>{skill}</StyledText>
                                            </FreelanceSkills>)}
                                        </div>
                    
                                        {freelanceInfo.available ? (<StyledText theme={theme} className='freelance__description__available'><span className='freelance__description__available__circle'><FontAwesomeIcon icon={faCircle} /></span>Disponible maintenant</StyledText>)
                                                                 : (<StyledText theme={theme} className='freelance__description__available'><span className='freelance__description__available__circle freelance__description__available__circle--red'><FontAwesomeIcon icon={faCircle} /></span>Indisponible pour le moment</StyledText>)}
                                        <StyledText theme={theme} className='freelance__description__price'>{freelanceInfo.tjm} € / Jour</StyledText>
                                    </div>
                    
                                    <FreelanceLocation theme={theme} className='freelance__location'>{freelanceInfo.location}, France</FreelanceLocation>
                              </FreelanceContainer>)}
           </div>)
}