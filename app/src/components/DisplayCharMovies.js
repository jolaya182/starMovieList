/* *
  title: DisplayCharMovies.js 

  date: 6/1/2019

  author: javier olaya

  description:the  component that handles the display for characters
         
 */
import React from 'react';
import style from '../css/style.css';

/* define the props of the DisplayCharMovies  */
const DisplayCharMovies = ({ currFormatedFilms }) => <div className={"resultContainer"}>

  <div className={"row"}>
    <div className={"columnLeftHeader"} >{"Title"}</div>
    <div className={"columnRightHeader"} >{"Release date"}</div>
  </div >
  <div className={"row"}>

    {currFormatedFilms.map((elem) => {
      return Object.keys(elem).map((k, indx)=>{ 
        return <div key={indx}className={"rowResult"}  >
          <div className={"columnLeft"} > {k} </div>
          <div className={"columnRight"} > {elem[k]} </div>
          </div>
      })        
    })}
  </div>
</div>;

export default DisplayCharMovies;