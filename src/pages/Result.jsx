import { useContext } from 'react'
import { SurveyContext } from '../utils/context/context'
import { useTheme, useFetch } from '../utils/hooks/hooks'

import Loader from '../components/Loader'
import background from "../assets/result-none-picture.png"

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ResultContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const ResultTitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ResultSpan = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#5843E4' : '#ffffff')};
`

const ResultDataContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const ResultDataTitle = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#5843E4' : '#ffffff')};
`

const ResultDataText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ResultNoneContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const ResultNoneText = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export default function Result() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)

  const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${fetchParams}`)
    
  const resultsData = data?.resultsData

  if (error) return(<span>Il y a un problème</span>)

  if (resultsData?.length === 0) return(<ResultNoneContainer theme={theme} className="resultNone">
                                            <ResultNoneText theme={theme} className="resultNone__title">Dommage...</ResultNoneText>
                                            <img src={background} alt='background de la page de résultat' className="resultNone__picture "/>
                                            <ResultNoneText theme={theme} className="resultNone__text">Il semblerait que vous n'ayez besoin d'aucune compétence</ResultNoneText>
                                        </ResultNoneContainer>)

  return(<ResultContainer className="result" theme={theme}>
              <ResultTitle theme={theme} className="result__title">Les compétences dont vous avez besoin : <ResultSpan theme={theme} className="result__title--purple">UX Design, frontend, backend</ResultSpan></ResultTitle>
              <Link to='/freelances' className="result__button">Découvrez nos profils</Link>

              {isLoading ? (<Loader />)
                         : (<ResultDataContainer theme={theme} className='result'>
                            {resultsData.map((result, index) => (
                                <div className="result__job" key={index}>
                                  <ResultDataTitle theme={theme} className="result__job__name">{result.title}</ResultDataTitle>
                                  <ResultDataText theme={theme} className="result__job__description">{result.description}</ResultDataText>
                                </div>
                            ))}
                            </ResultDataContainer>)}
          </ResultContainer>)
}