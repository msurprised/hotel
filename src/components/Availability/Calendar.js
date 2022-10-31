import React, {useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import dayjs from 'dayjs';


const Calendar = ({dateChanger, isInputActive}) => {
    const [value, setValue] = useState(dayjs('2022-04-07'));

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <CalendarPicker
      displayStaticWrapperAs="desktop"
      openTo="day"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        dateChanger(newValue);
        isInputActive(false);
      }}
    />

  </LocalizationProvider>

  )
}

export default Calendar;