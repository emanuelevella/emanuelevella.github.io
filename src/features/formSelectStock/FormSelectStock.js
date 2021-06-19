import styled from 'styled-components'
import MultiSelect from '../multiSelect/MultiSelect'
import Grid from '../grid/Grid'
import {isMobile} from 'react-device-detect';

const Wrapper = styled.div`
    background-color: rgba(47,47,66,255);
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    padding-bottom: 70px;
`


export default function FormSelectStock() {

    return (
        <Wrapper>
                <MultiSelect label="Compare stocks history!" subtitle="Select all the stocks you want to compare!"/>
                <Grid/>
-        </Wrapper>
    )

}