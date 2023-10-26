import React from 'react'
import '../cssModules/card.css'
import { Link } from 'react-router-dom';


const Card = (props) => {
    const shift = props.shift;
    return (
        <div className='card'>
            <div className="top">
            <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" alt="User" className="user-image" />
        </div>
        <div className="bottom">
            <h3 className="name">{shift.name}</h3>
            <p className="department">Department: {shift.department}</p>
            <p className="date">Date: {shift.date}</p>
            <p className="time">Shift Start: {shift.startTime} - Shift End: {shift.endTime}</p>
            <Link to={`/shifts/${shift.id}`}><button className="button">View</button></Link>
        </div>
        </div>
    )
}

export default Card