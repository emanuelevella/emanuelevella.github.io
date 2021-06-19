import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    color: ${props => props.theme.text}
`
const Text = styled.span`
    font-size: 6rem;
`

export default function NotFound(){

    return(
        <Wrapper><Text>404: not found</Text></Wrapper>
    )
}