import styled from 'styled-components'
import HomeIntroduction from '../../features/homeIntroduction/HomeIntroduction'
import Grid from '../../features/grid/Grid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`


export default function Home() {
    return (
        <Wrapper>
            <HomeIntroduction/>
            <Grid/>
        </Wrapper>
    )
}