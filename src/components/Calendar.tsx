import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import updateLocale from "dayjs/plugin/updateLocale";
import { TextField } from '@mui/material';

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
    weekStart: 1
});

const initialValue = dayjs();

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [dateTime, setDateTime] = React.useState(null);
  const [number, setNumber] = React.useState('');
  
  const reserve = () => {
    console.log("Rezervisano") // pozivanje backend-a
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateTime(dayjs(date).get('date') + "." + dayjs(date).get('month') + "." + dayjs(date).get('year') + ".");
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }


  const handleMonthChange = (date) => {
    console.log(date);
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disablePast
        value = {selectedDate}
        onChange={handleDateChange}
        defaultValue={initialValue}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
      />
      <TextField id="outlined-basic" label="Mobilni telefon" variant="outlined" value={number} onChange={handleNumberChange} />
      <button className='rezervisi-btn' onClick={reserve}>Rezervisi</button>


    </LocalizationProvider>
  );
}