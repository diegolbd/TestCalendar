"use client";

import React from "react";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "../styles/Calendar.module.scss";
// import CustomColumnHeader from "components/ProductionCalendar/CustomColumnHeader";
import CustomToolbar from "../components/CustomToolbar";

const localizer = momentLocalizer(moment);

const CalendarClient = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      start: new Date(),
      end: new Date(),
    },
    {
      id: 2,
      title: "Event 2",
      start: new Date(),
      end: new Date(),
    },
  ];

  const CustomCalendarView = ({ view, toolbar }) => (
    <div className={styles.calendarWrapper}>
      <div className={styles.additionalToolbar}>
        {/* Add your custom content for the additional vertical toolbar */}
        {/* For example: */}
        {/* <button>Button 1</button> */}
        {/* <button>Button 2</button> */}
      </div>
      {toolbar}
      {view}
    </div>
  );
  console.log("month view", <BigCalendar.MonthView/>)
  const components = {

    toolbar: CustomToolbar,
    
  }

  return (
    <div className={styles.calendarbox}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={components}
       
      />
    </div>
  );
};

export default CalendarClient;
