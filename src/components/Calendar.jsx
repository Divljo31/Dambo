import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
<<<<<<< HEAD
import checkImage from '../assets/check.png'; // Import your PNG image
import Avatar from '@mui/material/Avatar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
    weekStart: 1
});
=======
import updateLocale from "dayjs/plugin/updateLocale";
import { TextField } from '@mui/material';

dayjs.extend(updateLocale);
>>>>>>> dfb768644ce149031b0be67661873ffe2d4c8c2e

dayjs.updateLocale("en", {
    weekStart: 1
});

const initialValue = dayjs();

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef(null);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    if (date){
        onDateSelect(date);
    }
    
    
  };
  

  const onDateSelect = (date) => {
    
    console.log('Date ', date);

  }
 
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };


=======
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [dateTime, setDateTime] = React.useState(null);
  const [number, setNumber] = React.useState('');
  
  const reserve = () => {
    console.log("Rezervisano") // pozivanje backend-a
  }
>>>>>>> dfb768644ce149031b0be67661873ffe2d4c8c2e

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
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar
        disablePast
<<<<<<< HEAD
        
        value = {selectedDate}
=======
        value = {selectedDate}
        onChange={handleDateChange}
>>>>>>> dfb768644ce149031b0be67661873ffe2d4c8c2e
        defaultValue={initialValue}
        onMonthChange={handleMonthChange}
        onChange={handleDateChange}
        renderLoading={() => <DayCalendarSkeleton />}
      />
      <TextField id="outlined-basic" label="Mobilni telefon" variant="outlined" value={number} onChange={handleNumberChange} />
      <button className='rezervisi-btn' onClick={reserve}>Rezervisi</button>


    </LocalizationProvider>
  );
}