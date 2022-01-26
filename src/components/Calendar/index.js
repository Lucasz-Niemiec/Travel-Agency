import { takeMonth } from "../../helpers/calendar";
import { format, isSameMonth, isSameDajy } from "date-fns";
import {
  DayNames,
  Week,
  Day,
  Wrapper,
  DayNameConatainer,
} from "./Calnedar.styled";
const Calendar = () => {
  const data = takeMonth(new Date())();

  return (
    <Wrapper>
      <DayNameConatainer>
        {" "}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
          <DayNames>{dayName}</DayNames>
        ))}
      </DayNameConatainer>
      {data.map((week) => (
        <Week>
          {week.map((day) =>
            !isSameMonth(day, new Date()) ? (
              <Day color="#000">{format(day, "dd")}</Day>
            ) : (
              <Day>{format(day, "dd")}</Day>
            )
          )}
        </Week>
      ))}
    </Wrapper>
  );
};

export default Calendar;
