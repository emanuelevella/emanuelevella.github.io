import styled from 'styled-components'
import HomeIntroduction from '../../features/homeIntroduction/HomeIntroduction'
import CompareStock from '../../features/compareStock/CompareStock'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Home() {
    return (
        <Wrapper>
            <HomeIntroduction/>
            <CompareStock/>
        </Wrapper>
    )
}