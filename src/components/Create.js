import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import createCSS from '../cssModules/create.module.css';
import toast, { Toaster } from 'react-hot-toast';

const Create = () => {
  const [body, setBody] = useState('');
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const shift = {name, body, department, date, startTime, endTime};
    fetch('http://localhost:8000/shifts/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shift)
    }).then(() => {
      toast.success("success")
      navigate('/');
    });
  }

  const notify = () => toast('Here is your toast.');

  return (
    
    <div className={createCSS["create"]}>
      <Toaster />
      <h2>Add a New Shift</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Job Description:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Department:</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="Software Dev">Software Dev</option>
            <option value="HR">HR</option>
            <option value="Testing">Testing</option>
            <option value="Database Administration">Database Administration</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Operations">Operations</option>
          </select>

        <label for="ShiftDate">Select Shift Date:</label>
          <input type="date" id="ShiftDate" required value={date} onChange={(e) => setDate(e.target.value)} name="date"/>

        <label for="StartTime">Select Start time:</label>
          <input type="time" id="StartTime" name="StartTime" value={startTime} required onChange={(e)=>setStartTime(e.target.value)}/>
        
        <label for="EndTime">Select End time:</label>
          <input type="time" id="EndTime" name="EndTime" value={endTime} required onChange={(e)=>setEndTime(e.target.value)}/>
        
        <button type="submit">Add shift</button>
      </form>
    </div>
  );
}
export default Create;