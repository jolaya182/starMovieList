/* *
  title: Error.js 

  date: 6/1/2019

  author: javier olaya

  description: the component that handles the display of errors
         
 */
import React from 'react';
import style from '../css/style.css';

/* define the props of the Errors component  */
const Error = ({ error , currChar}) => {
  return (
    <div>
      <div className="error">
        <h4>Error Could not retrieve data for</h4>
        <h4>{currChar}</h4>
      </div>
    </div>
  );
}

export default Error;