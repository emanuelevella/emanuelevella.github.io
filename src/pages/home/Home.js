import styled from 'styled-components'
import HomeIntroduction from '../../features/homeIntroduction/HomeIntroduction'
import FormSelectStock from '../../features/formSelectStock/FormSelectStock'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`


export default function Home() {
    return (
        <Wrapper>
            <HomeIntroduction/>
            <FormSelectStock/>
        </Wrapper>
    )
}