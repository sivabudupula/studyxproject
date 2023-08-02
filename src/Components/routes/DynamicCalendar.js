import React, { useState, useEffect } from 'react';
import '../styles/DynamicCalendar.css';

const DynamicCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [attendance, setAttendance] = useState({});

  // Function to load attendance data from local storage
  const loadAttendanceFromLocalStorage = () => {
    const storedAttendance = localStorage.getItem('attendance');
    if (storedAttendance) {
      setAttendance(JSON.parse(storedAttendance));
    }
  };

  // Load attendance data from local storage on component mount
  useEffect(() => {
    loadAttendanceFromLocalStorage();
  }, []);

  // Update local storage whenever attendance data changes
  useEffect(() => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }, [attendance]);

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);

    if (day.getMonth() < selectedMonth) {
      setSelectedMonth(day.getMonth());
      setSelectedYear(day.getFullYear());
    } else if (day.getMonth() > selectedMonth) {
      setSelectedMonth(day.getMonth());
      setSelectedYear(day.getFullYear());
    }
  };

  const handleAttendanceChange = (day, attendanceStatus) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [day.toDateString()]: attendanceStatus,
    }));
  };

  const getDaysInMonth = () => {
    const year = selectedYear;
    const month = selectedMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];
    let currentDate = new Date(firstDay);

    while (currentDate <= lastDay) {
      daysInMonth.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysInMonth;
  };

  const renderDayNames = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map((day) => (
      <div key={day} className="day-name">
        {day}
      </div>
    ));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth();
    const firstDayOfMonth = daysInMonth[0].getDay();
    const weeks = [];

    let week = [];

    const today = new Date();

    const lastMonth = new Date(selectedYear, selectedMonth - 1, 1);
    const lastMonthLastDay = new Date(selectedYear, selectedMonth, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const dayDate = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), lastMonthLastDay - i);
      week.push({
        date: dayDate,
        isCurrentMonth: false,
        isToday: isSameDate(today, dayDate),
      });
    }

    daysInMonth.forEach((day) => {
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      week.push({
        date: day,
        isCurrentMonth: true,
        isToday: isSameDate(today, day),
      });
    });

    const lastDayOfMonth = daysInMonth[daysInMonth.length - 1].getDay();
    const nextMonth = new Date(selectedYear, selectedMonth + 1, 1);
    for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
      const dayDate = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i);
      week.push({
        date: dayDate,
        isCurrentMonth: false,
        isToday: isSameDate(today, dayDate),
      });
    }

    weeks.push(week);

    return weeks.map((week, index) => (
      <div key={index} className="week">
        {week.map((day, index) => (
          <div
            key={index}
            className={`day ${day.isCurrentMonth ? 'current-month' : 'other-month'} ${
              day.isToday ? 'today' : ''
            } ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 'selected' : ''} ${
              attendance[day.date.toDateString()] || ''
            }`}
            onClick={() => handleDateClick(day.date)}
          >
            {day.date.getDate()}
            <div className="attendance-input">
              <label htmlFor={`attendance-${day.date.toDateString()}`}>Attendance:</label>
              <select
                id={`attendance-${day.date.toDateString()}`}
                value={attendance[day.date.toDateString()] || ''}
                onChange={(e) => handleAttendanceChange(day.date, e.target.value)}
              >
                <option value="" className="select">
                  Select
                </option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="holiday">Holiday</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  function isSameDate(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  const renderYearOptions = () => {
    const startYear = 2000;
    const endYear = 2100;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  return (
    <div className="calendar-container shadow">
      <div className="header">
        <button className="arrows" onClick={handlePrevMonth}>
          &lt;
        </button>
        <h2 className="monthspadding">
          <select
            className="month-year-dropdown"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            aria-label="Select Month"
          >
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <select
            className="month-year-dropdown"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            aria-label="Select Year"
          >
            {renderYearOptions()}
          </select>
        </h2>
        <button className="arrows" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="day-names">{renderDayNames()}</div>
      <div className="calendar">{renderCalendar()}</div>
    </div>
  );
};

export default DynamicCalendar;