import React from 'react'
import styled from 'styled-components'

const CountryFlag = ({flagCode}) => {
    return (
        <Flag flagCode={flagCode} />
    )
}

const Flag = styled.div`
    width: 50px;
    height: 150px;
    cursor: pointer;
    position: relative;
    &::after {
        content: ${props => props.flagCode && props.flagCode};
        font-size: 80px;
        content: "\\1F1EC \\1F1E7";
    }
`

export default CountryFlag