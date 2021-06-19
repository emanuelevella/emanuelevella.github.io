import styled from 'styled-components'
import React, { Component } from 'react'
import AsyncSelect from 'react-select'

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

export default function MultiSelect ({ label, subtitle }) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const filterColors = (inputValue) => {
        return options.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };

    const promiseOptions = inputValue =>
    new Promise(resolve => {
        setTimeout(() => {
        resolve(filterColors(inputValue));
        }, 1000);
    });


    return (
        <Wrapper>
            <Label>{label}</Label>
            <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
            <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
    )
}

