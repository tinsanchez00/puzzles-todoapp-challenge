import React from 'react'
import styled from "styled-components/native"
import { CLR_GREEN } from '../constants/Colors'

const PrimaryButton = ({text, action}: {text: string, action: Function}) => {
    return (
        <PrimaryButtonStyled onPress={() => action()}>
            <StyledText>{text}</StyledText>
        </PrimaryButtonStyled>
    )
}

export default PrimaryButton

const PrimaryButtonStyled = styled.TouchableOpacity`
    width: 80%;
    background-color: ${CLR_GREEN};
    padding: 10px 0;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const StyledText = styled.Text`
    color: white;
    font-weight: 500;
`


