/* *
  title: SelectChar.js 

  date: 6/1/2019

  author: javier olaya

  description:the  component that handles the display for characters
         
 */
import React from 'react';
import style from '../css/style.css';

/* define the props of the selectChar  */
export default class SelectChar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelection = props.handleSelection.bind(this);
  }

/* 
 @description handles the form submission

 @param Event

 */
  handleFormSubmission = (e) => {
    e.preventDefault();
    const handleSelection = this.props.handleSelection;
    const form = this.form;
    const char = form[0].value;
    // console.log("char", char);
    char === "select character" ? handleSelection("") : handleSelection(char);
  }

  render() {
    const { handleFormSubmission } = this;
    const charList = this.props.charList;
    return (
      <div className={"selectBoxContainer cent"}>
        <h1>Star Wars</h1>
        <form onChange={handleFormSubmission} ref={f => this.form = f}>
          <div className={"row cent"}>
            <div className={"column cent"}>
              <select className={"cent"}>
                <option>{"select character"}</option>
                {charList["characters"].map((char, indx) => {
                  return <option key={indx}>{char["name"]}</option>
                })}
              </select>
            </div>
          </div>
        </form>
      </div>

    );
  }
}


