import styled from 'styled-components'
import React from 'react'
import AsyncSelect from 'react-select/async'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    min-width: 30vw;

`
const Label = styled.h1`
    font-family: Roboto;
    color: ${props => props.alwaysDarkMode ? "white" : props.theme.text};
`

const Subtitle = styled.h3`
    font-family: Roboto;
    color: ${props => props.alwaysDarkMode === true ? "white" : props.theme.text};
    font-size: 1rem;
`

export default function Select ({ label, subtitle, search, onChange, isMultiSelect, alwaysDarkMode }) {
    return (
        <Wrapper>
            <Label alwaysDarkMode={alwaysDarkMode}>{label}</Label>
            <AsyncSelect isMulti={isMultiSelect} cacheOptions defaultOptions onChange={onChange} loadOptions={search} />
            <Subtitle alwaysDarkMode={alwaysDarkMode}>{subtitle}</Subtitle>
        </Wrapper>
    )
}

