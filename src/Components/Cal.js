import React from 'react';

export default function Cal(props) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    debugger;
    return (
       <div className="daycolumn">
           <div className="weekdaytitle">{days[props.day]}</div>
            <ul className={props.colClass}>
                {props.dates.map(d => <li key={d.time.toString()}>{d.name}</li> )}
            </ul>
       </div>
    );
}