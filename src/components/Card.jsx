import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTheme } from '../utils/hooks/hooks'
import { Link } from 'react-router-dom'

const FreelanceContainer = styled(Link)`
    background-color: ${({ theme }) =>
    theme === 'light' ? '#F9F9FC' : '#4F4C6B'};
`

const FreelanceName = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const FreelanceJob = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '##5843E4' : '#ffffff')};
`

export default function Card({ label, title, picture, id }) {
    const { theme } = useTheme()
    
    return (
        <FreelanceContainer className='freelances__person__box' theme={theme} to={id}>
            <FreelanceJob className='freelances__person__box__title' theme={theme}>{label}</FreelanceJob>
            <img src={picture} alt="visage freelance" className='freelances__person__box__picture' />
            <FreelanceName className='freelances__person__box__name' theme={theme}>{title}</FreelanceName>
        </FreelanceContainer>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

Card.defaultProps = {
    label: 'UX Designer',
    title: 'Jane Doe'
}