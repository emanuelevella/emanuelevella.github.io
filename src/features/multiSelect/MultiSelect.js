import styled from 'styled-components'
import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    min-width: 30vw;

`
const Label = styled.h1`
    font-family: Roboto;
    color: white;
`

const Subtitle = styled.h3`
    font-family: Roboto;
    color: white;
    font-size: 1rem;
`

export default function MultiSelect ({ label, subtitle, search, onChange }) {
    const [value, setValue] = useState([])

    return (
        <Wrapper>
            <Label>{label}</Label>
            <AsyncSelect isMulti cacheOptions defaultOptions value={value} onChange={onChange} loadOptions={search} />
            <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
    )
}

