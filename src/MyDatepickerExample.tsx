import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './MyDatepickerExample.css';

type DatetimeExampleProps = {
  propRow: {
    ActualExecPeriodStartDate: string;
    ActualExecPeriodStartTime: string;
  };
};

const MyDatetimeExample: React.FC<DatetimeExampleProps> = ({ propRow }) => {
  //using optional chaining (?.) and ternary operator to check if propRow and the properties exist before trying to create a new Date object. 
  //If propRow or the properties are undefined, it will set startDate and startTime to null.
  const [startDate, setStartDate] = useState<Date | null>(
    propRow?.ActualExecPeriodStartDate ? new Date(propRow.ActualExecPeriodStartDate) : null
  );
  const [startTime, setStartTime] = useState<Date | null>(
    propRow?.ActualExecPeriodStartTime ? new Date(propRow.ActualExecPeriodStartTime) : null
  );


  const [fullName, setFullName] = useState<string>('');

  const onActualStartDateChanged = (date: Date) => {
    setStartDate(date);
  };

  const onActualStartTimeChanged = (time: Date) => {
    setStartTime(time);
  };

  const onFullNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };


  const onSubmit = () => {
    if (startDate && startTime) {
      const datetime = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startTime.getHours(),
        startTime.getMinutes(),
        startTime.getSeconds()
      );
  
      const data = {
        FullName: fullName,
        Datetime: datetime.toISOString(),
      };
  
      console.log(data);
    } else {
      console.log('Please fill in all fields.');
    }
  };


  const currDt = new Date();  
  const dateFiveYearsAgo = new Date(currDt.getTime()); //to be mutated, get timestamp first 
  dateFiveYearsAgo.setFullYear(dateFiveYearsAgo.getFullYear() - 5); //mutation, now 5 years ago

  //
  let handleColor = (time: Date): string => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  

  return (
    <div className="form-container">
      <label className="form-label">Full Name</label>
      <input
        className="form-input"
        type="text"
        value={fullName}
        onChange={onFullNameChanged}
        maxLength={20}
      />

      <label className="form-label">Start Date</label>
      <div className="datepicker-icon-container">
        <DatePicker
          selected={startDate}
          onChange={onActualStartDateChanged}
          dateFormat="yyyy-MM-dd"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"          
          minDate={dateFiveYearsAgo}
          maxDate={currDt}
          className="datepicker-custom"
        />
        <span className="datepicker-icon">📅</span> {/* Example using an emoji as an icon */}
      </div>

      <label className="form-label">Start Time</label>
      <div className="datepicker-icon-container">
        <DatePicker
          selected={startTime}
          onChange={onActualStartTimeChanged}
          showTimeSelect
          showTimeSelectOnly
	        dateFormat  = "HH:mm:ss" //for display, only show time.
	        timeFormat  = "HH:mm" //for the selector, no seconds
          timeIntervals={5}
          className="datepicker-custom"
        />
        <span className="datepicker-icon">⏰</span> {/* Example using an emoji as an icon */}
      </div>

      <label className="form-label">Combined Date/Time Picker</label>
      <div className="datepicker-icon-container">
        <DatePicker
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeClassName={handleColor}
          dateFormat  = "yyyy-MM-dd HH:mm" //for display, only show time.
          popperPlacement="bottom-start" // Adjust this value as needed
        />
        <span className="datepicker-icon">⏰</span> {/* Example using an emoji as an icon */}
      </div>

      <button className="submit-button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default MyDatetimeExample;
