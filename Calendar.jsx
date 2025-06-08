import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { 'en-US': require('date-fns/locale/en-US') };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export default function MyCalendar() {
  const events = [{ title: 'Meeting', start: new Date(), end: new Date() }];
  return <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />;
}
