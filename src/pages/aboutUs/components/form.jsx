import React, { forwardRef } from 'react';

const Courses = forwardRef((props, ref) => (
  <div
    ref={ref}
    id="course"
    style={{
      height: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e1e1e1',
      marginBottom: '10px',
    }}
  >
    <h2>Course Section</h2>
    <p>Here is the course information. Explore our offerings!</p>
  </div>
));

export default Courses;
