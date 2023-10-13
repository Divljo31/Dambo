import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
    weekStart: 1
});

const initialValue = dayjs();

export default function DateCalendarServerRequest() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disablePast
        defaultValue={initialValue}
        renderLoading={() => <DayCalendarSkeleton />}
      />
    </LocalizationProvider>
  );
}