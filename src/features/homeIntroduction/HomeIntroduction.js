import styled from 'styled-components'
import illustration from '../../assets/illustrations/stonks-illustration.svg'
import {isMobile} from 'react-device-detect';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: ${isMobile ? 'row wrap' : ''};
    flex-direction: row;
    height: 85%;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`

const ImageWrapper = styled.div`

`

const Image = styled.img`
    margin-right: ${isMobile ? 'auto' : '50px'};
    transform: ${isMobile ? 'scale(0.4)' : 'scale(1)'};
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    margin-left: 50px;
    word-wrap: break-word;
`

const Title = styled.span`
    font-family: 'Fjalla One', sans-serif;    
    overflow: hidden;
    word-wrap:break-word;
    font-size: 4rem;
    color: ${ props => props.theme.text};
`

const Description = styled.p`
    font-family: 'Fjalla One', sans-serif;
    font-size: 2rem;
    color: ${ props => props.theme.text};
`

const GradientText = styled.span`
    background: linear-gradient(45deg, rgba(231,0,138,1) 0%, rgba(255,0,58,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

export default function HomeIntroduction() {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>Empower your finances thanks to <GradientText>Stonks</GradientText></Title>
                <Description>Compare, see history and buy <GradientText>stocks</GradientText> in few simple steps.</Description>
            </TextWrapper>
            { !isMobile ? 
                <ImageWrapper>
                    <Image src={illustration}/>
                </ImageWrapper>
                :
                ""
            }
        </Wrapper>
    )
}