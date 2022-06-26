import Loader from '../components/Loader';

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styled from 'styled-components'

import { useFetch, useTheme } from '../utils/hooks/hooks'
import { SurveyContext } from '../utils/context/context'

const QuestionNumber = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Question = styled.p`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionAnswers = styled.button`
    background-color: ${({ theme }) => theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionNav = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-bottom: ${({ theme }) => (theme === 'light' ? '2px solid black' : '2px solid white')};
`

export default function Survey() {
    const { theme } = useTheme()
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)

    const { surveyData } = data

    // useEffect(() => {
        
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //         .then((response) => response.json()
    //         .then(({ surveyData }) => setSurveyData(surveyData))
    //         .then(() => setDataLoading(false))
    //         .catch((error) => console.log(error))
    //     )
    // }, []);


    // useEffect(() => {
    //     async function fetchSurvey() { 
    //         setDataLoading(true);
    //         try {
    //             const response = await fetch(`http://localhost:8000/survey`);
    //             const { surveyData } = await response.json();
    //             setSurveyData(surveyData);
    //         }
    //         catch(err) {
    //             console.log(err);
    //         }
    //         finally {
    //             setDataLoading(false);
    //         }
    //     }
    //     fetchSurvey();
    // }, [])

    const { answers, saveAnswers } = useContext(SurveyContext)

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
    }

    
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    if (error) return <span>Il y a un problème</span>;

    return (
        <div className='survey'>
            <QuestionNumber className='survey__number' theme={theme}>Question {questionNumber}</QuestionNumber>

            {isLoading ? (<Loader />) 
                       : (<Question className='survey__question' theme={theme}>{surveyData && surveyData[questionNumber]}</Question>)}

            <div className='survey__response'>
                <QuestionAnswers theme={theme} onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true} className='survey__response__button'>Oui</QuestionAnswers>
                <QuestionAnswers theme={theme} onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false} className='survey__response__button'>Non</QuestionAnswers>
            </div>

            <div className='survey__nav'>
                <QuestionNav to={`/survey/${prevQuestionNumber}`} className='survey__nav__part' theme={theme}>Précédente</QuestionNav>

                {questionNumberInt === 10 ? (
                    <QuestionNav to="/result" className='survey__nav__part' theme={theme}>Résultats</QuestionNav>
                ) : (
                    <QuestionNav to={`/survey/${nextQuestionNumber}`} className='survey__nav__part' theme={theme}>Suivant</QuestionNav>
                )}
            </div>
        </div>
    )
}