import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import DatePicker from '../components/DatePicker';
import PrimaryButton from '../components/PrimaryButton';
import TimePicker from '../components/TimePicker';
import { CLR_BLACK, CLR_GRAY, CLR_LIGHTGRAY, CLR_WHITE } from '../constants/Colors';
import useAddScreenLogic from '../hooks/useAddScreenLogic';
import { addTask } from '../redux/actions';



const AddScreen = () => {

    const [input, handleInputChange, handleSubmit] = useAddScreenLogic()


    return (
        <Outer>
            <InputBox>
                <InputTitleText>Title</InputTitleText>
                <TextInputStyled placeholder="Enter a title" placeholderTextColor={CLR_GRAY} value={input.title} onChangeText={(text) => {
                    handleInputChange("title", text) 
                }}/>
            </InputBox>
            <InputBox>
                <InputTitleText>Deadline</InputTitleText>
                <DatePicker onChange={(value:string) => {
                    handleInputChange("deadline", value) 
                }} />
            </InputBox>

            <DoubleInputBox>
                <SmallerInputBox>
                    <InputTitleText>Start Time</InputTitleText>
                    <TimePicker onChange={(value:string) => {
                        handleInputChange("startTime", value) 
                    }}/>
                </SmallerInputBox>
                
                <SmallerInputBox>
                    <InputTitleText>End Time</InputTitleText>
                    <TimePicker onChange={(value:string) => {
                        handleInputChange("endTime", value) 
                    }}/>
                </SmallerInputBox>
            </DoubleInputBox>

            <InputBox>
                <InputTitleText>Remind</InputTitleText>
                <PickerWrapperStyle>
                    <Picker
                    selectedValue={input.remind}
                    onValueChange={(itemValue, itemIndex) =>
                        handleInputChange("remind", itemValue) 
                    }
                    style={{
                        color: CLR_GRAY
                    }}>
                    <Picker.Item label="10 minutes early" value="10" />
                    <Picker.Item label="20 minutes early" value="20" />
                    <Picker.Item label="30 minutes early" value="30" />
                    </Picker>
                </PickerWrapperStyle>
                
            </InputBox>

            <InputBox>
                <InputTitleText>Repeat</InputTitleText>
                <PickerWrapperStyle>
                    <Picker
                    selectedValue={input.repeat}
                    onValueChange={(itemValue, itemIndex) =>
                        handleInputChange("repeat", itemValue) 
                    }
                    style={{
                        color: CLR_GRAY
                    }}>
                    <Picker.Item label="Weekly" value="weekly" />
                    <Picker.Item label="Daily" value="daily" />
                    <Picker.Item label="Never" value="never" />
                    </Picker>
                </PickerWrapperStyle>
                
            </InputBox>
            <ButtonWrapper>
                <PrimaryButton text="Create Task" action={handleSubmit}/>
            </ButtonWrapper>
        </Outer>
    )
}


export const Outer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: ${CLR_WHITE};
    width: 100%;
    padding: 10px 20px;
`;

export const InputBox = styled.View`
    width: 100%;
    margin: 8px 0;
`;
export const DoubleInputBox = styled.View`
    width: 100%;
    margin: 8px 0;
    flex-direction: row;
    justify-content: space-between;
`;
export const SmallerInputBox = styled.View`
    width: 48%;
`;

export const TextInputStyled = styled.TextInput`
    background-color: ${CLR_LIGHTGRAY};
    padding: 12px;
    border-radius: 6px;
    font-weight: 500;
`;

export const InputTitleText = styled.Text`
    color: ${CLR_BLACK};
    font-weight: 500;
    margin-bottom: 4px;
`;

export const PickerWrapperStyle = styled.View`
    width: 100%;
    background-color: ${CLR_LIGHTGRAY};
    padding: 12px 6px;
`;

export const ButtonWrapper = styled.View`
    width: 100%;
    margin-top: auto;
    align-items: center;
`;

export default AddScreen


