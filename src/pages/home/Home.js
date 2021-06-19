import styled from 'styled-components'
import {isMobile} from 'react-device-detect';
import HomeIntroduction from '../../features/homeIntroduction/HomeIntroduction'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: ${isMobile ? 'row wrap' : ''};
    flex-direction: row;
    height: 85vh;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`


export default function Home() {


    return (
        <Wrapper>
            <HomeIntroduction/>
        </Wrapper>
    )
}