import { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [month, setMonth] = useState(0); // January = 0
  const [year, setYear] = useState(2021);
  const [selectedDate, setSelectedDate] = useState(null); // Track selected day

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDay = (month, year) => new Date(year, month, 1).getDay();

  const holidays = {
    "1-26": "Republic Day 🇮🇳",
    "8-15": "Independence Day 🇮🇳",
  };

  const getHoliday = (day, isOtherMonth = false) => {
    if (isOtherMonth) return null;
    let key = `${month + 1}-${day}`;
    return holidays[key] || null;
  };

  const generateCalendar = () => {
    const daysInCurrentMonth = getDaysInMonth(month, year);
    const startDay = getStartDay(month, year);
    const previousMonth = month === 0 ? 11 : month - 1;
    const nextMonth = month === 11 ? 0 : month + 1;
    const previousYear = month === 0 ? year - 1 : year;
    const nextYear = month === 11 ? year + 1 : year;

    const daysInPreviousMonth = getDaysInMonth(previousMonth, previousYear);
    let actualStartDay = (startDay === 0 ? 6 : startDay - 1);

    let calendar = [];
    let week = [];

    // **Fill previous month's days**
    for (let i = actualStartDay - 1; i >= 0; i--) {
      week[i] = { day: daysInPreviousMonth - (actualStartDay - i - 1), isOtherMonth: true, month: previousMonth };
    }

    // **Fill current month's days**
    let dayCounter = 1;
    for (let i = actualStartDay; i < 7; i++) {
      week[i] = { day: dayCounter++, isOtherMonth: false, month };
    }
    calendar.push(week);

    while (dayCounter <= daysInCurrentMonth) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        if (dayCounter > daysInCurrentMonth) break;
        week[i] = { day: dayCounter++, isOtherMonth: false, month };
      }
      calendar.push(week);
    }

    // **Fill next month's days**
    let lastWeek = calendar[calendar.length - 1];
    let nextDay = 1;
    for (let i = lastWeek.length; i < 7; i++) {
      lastWeek[i] = { day: nextDay++, isOtherMonth: true, month: nextMonth };
    }

    return calendar;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Calendar</h2>
        <div className="calendar-controls">
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
            {months.map((m, index) => (
              <option key={index} value={index}>{m}</option>
            ))}
          </select>
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {[2021, 2022, 2023, 2024, 2025].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <div className="new-student-btn">
            Add New Student
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-week">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
        </div>

        {generateCalendar().map((week, i) => (
          <div key={i} className="calendar-week">
            {week.map((dateObj, j) => {
              let holiday = dateObj && !dateObj.isOtherMonth ? getHoliday(dateObj.day) : null;

              return (
                <div 
                  key={j} 
                  id="hhhh"
                  className={`calendar-day 
                    ${dateObj?.isOtherMonth ? "other-month" : ""}
                    ${selectedDate === dateObj?.day && !dateObj?.isOtherMonth ? "selected" : ""}
                    ${holiday ? "holiday" : ""}
                  `} 
                  onClick={() => !dateObj?.isOtherMonth && setSelectedDate(dateObj?.day)}
                >
                  {dateObj && <span>{dateObj.day}</span>}
                  {holiday && <div className="holiday-text">{holiday}</div>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
