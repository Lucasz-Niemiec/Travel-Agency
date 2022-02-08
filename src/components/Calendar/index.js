import { takeMonth } from "../../helpers/calendar";
import { useState } from "react";
import {
  format,
  isSameMonth,
  isSameDay,
  lastDayOfMonth,
  startOfMonth,
  addDays,
  subDays,
  toDate,
} from "date-fns";
import {
  DayNames,
  Week,
  Day,
  Wrapper,
  DayNameConatainer,
  Button,
  CalendarContainer,
  Span,
} from "./Calnedar.styled";
const Calendar = () => {
  const [selectedDate, setSelecetedDate] = useState(new Date());
  const data = takeMonth(selectedDate)();

  const colorDay = (day) => {
    if (!isSameMonth(day, selectedDate)) return "#737F87";
    if (isSameDay(day, selectedDate)) return "bg";
  };
  const handleNextMonth = () => {
    let last = lastDayOfMonth(selectedDate);
    let result = addDays(last, 1);
    setSelecetedDate(result);
  };
  const handlePreviousMonth = () => {
    let last = startOfMonth(selectedDate);
    let result = subDays(last, 1);
    setSelecetedDate(result);
  };

  const handleEnterNext = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleNextMonth();
    }
  };
  const handleEnterPrevious = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handlePreviousMonth();
    }
  };

  return (
    <Wrapper aria-label="calendar">
      <Button right onKeyPress={handleEnterNext} onClick={handleNextMonth}>
        <Span right></Span>
      </Button>
      <Button onKeyPress={handleEnterPrevious} onClick={handlePreviousMonth}>
        <Span></Span>
      </Button>

      <CalendarContainer>
        <h1> {format(selectedDate, "MMMM")}</h1>
        <DayNameConatainer>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (dayName, index) => (
              <DayNames key={index}>{dayName}</DayNames>
            )
          )}
        </DayNameConatainer>

        {data.map((week, index) => (
          <Week key={index}>
            {week.map((day, index) => (
              <Day
                tabIndex={0}
                key={index}
                color={`${colorDay(day)}`}
                className={`${colorDay(day)}`}
                onClick={() => setSelecetedDate(day)}
                onKeyPress={() => setSelecetedDate(day)} //
              >
                {format(day, "dd")}
              </Day>
            ))}
          </Week>
        ))}
      </CalendarContainer>
    </Wrapper>
  );
};

export default Calendar;
