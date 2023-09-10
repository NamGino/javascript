import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa'; // Import icon from a library like react-icons

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div >
      <label htmlFor="dateInput" className='ms-2 mt-2' style={{position:'absolute'}}>Ngày bắt đầu</label>
      <div className="date-input">
        <DatePicker
          id="dateInput"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Chọn ngày"
          customInput={<CustomInputIcon />}
        />
      </div>
      {/* <label htmlFor="dateInput" >Ngày kết thúc</label>
      <div className="date-input">
        <DatePicker
          id="dateInput"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Chọn ngày"
          customInput={<CustomInputIcon />}
        />
      </div> */}
    </div>
  );
};

const CustomInputIcon = (onClick) => (
  <div className="custom-input-icon mt-2" onClick={onClick} >
    <FaCalendar className="calendar-icon mt-1" style={{position:'absolute', right:'3px'}}/>
    <input type="text" readOnly={true} />
  </div>
);

export default DateInput;