import React, { useState } from 'react'
import {View, Platform, Text} from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { CLR_GRAY, CLR_LIGHTGRAY } from '../constants/Colors';

interface Props {
    onChange: (value: string) => void
}

const DatePicker = ({onChange} : Props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const handleOnChange = (event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        onChange(currentDate.toLocaleDateString())
    };

    return (
    <View>
        <DateBox onPress={() => {
            setShow(true)
        }}>
            <Text style={{fontWeight: "500", color: CLR_GRAY}}>{date.toLocaleDateString()}</Text>
        </DateBox >
        {show && <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={handleOnChange}
        />}
    </View>
    );
}

export const DateBox = styled.TouchableOpacity`
    width: 100%;
    background-color: ${CLR_LIGHTGRAY};
    padding: 12px;
    border-radius: 6px;
`;

export default DatePicker
