import React from 'react';
import { Toolbar, Views } from 'react-big-calendar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from "../styles/Calendar.module.scss"

const CustomToolBar = (toolbarProps) => {

  const { onView, onNavigate } = toolbarProps;

  const goToPrevious = () => {
    onNavigate('PREV');
  };

  const goToNext = () => {
    onNavigate('NEXT');
  };
  const goToToday = () => {
    onNavigate('TODAY');
  }

  const handleViewChange = (view) => {
    onView(view);
  };

  return (
    <div className={styles.toolbar}>


      <div className={styles.arrows}>
        <button onClick={goToToday}>
          TODAY
        </button>
        <button onClick={goToPrevious}>
          <FaArrowLeft />
        </button>
        <button onClick={goToNext}>
          <FaArrowRight />
        </button>
      </div>


      <div className={styles.viewButtons}>
        <button onClick={() => handleViewChange(Views.MONTH)}>Month</button>
        <button onClick={() => handleViewChange(Views.WEEK)}>Week</button>
        <button onClick={() => handleViewChange(Views.DAY)}>Day</button>
        <button onClick={() => handleViewChange(Views.AGENDA)}>Agenda</button>

      </div>


      <button>create</button>

    </div>
  );
};

export default CustomToolBar;
