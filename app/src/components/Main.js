/* *
  title: Main.js 

  date: 6/1/2019

  author: javier olaya

  description:the Main component that handles the main logic for accessing and 
  organizing the search for star wars characters
         
 */
import React from 'react';
import characters from './characters';
import SelectCar from './SelectChar';
import DisplayCharMovies from './DisplayCharMovies';
import Error from './Error';
import style from '../css/style.css';

/* define the state properties of the main class */
export default class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currChar:null, 
      currFormatedFilms:[],
      charList:characters,
      error: null
    }
  }

/* 
 @description handles the select box submission

 @param string

 */
  handleSelection = (character) => {
    this.setState((state, props)=>({currChar : character}))
    this.fetchCharMovie(character);
  }

 /* 
 @description fetches the movies based on character

 @param string

 */
  fetchCharMovie =(char) =>{
     const characters = this.state.charList["characters"];
     let url = "";
      url = characters.filter((ch)=>{
      return (ch.name === char) ?  true : false;
     });

     fetch(url[0].url).then((response)=>{
      //  if(response.status >= 400){alert("could not retrieve data due this status code "+response.status);}
       return response.json();
     }).then((json)=>{
        this.fetchMovieLinks(json.films);
     }).catch((err)=>{
       this.setState((state, props)=>({error: err}));
      });
   }

  /* 
  @description fetches the films details based on movie link

  @param array

  */
  fetchMovieLinks = (arryMovieLinks) =>{
    let films = [];
    arryMovieLinks.map((filmLink, indx)=>{
      fetch(filmLink).then((response)=>{
        return response.json();
      }).then((json)=>{
        let d = new Date(json.release_date);
        let day = d.toLocaleDateString("en-US-u-ca-buddhist", {weekday: 'long'});
        let month = d.toLocaleDateString("en-US-u-ca-buddhist",{month: 'long'});
        let date = day +", "+ month + " " + d.getDay() + " " + d.getFullYear();
        let titleDate = { [json.title]:  date };
        films.push(titleDate);
        this.setState((state, props)=>({currFormatedFilms: films, error:null}));
      }).catch((err)=>{
          alert("could not retrieve data due this error "+err);
      });
    });
  }

  render(){
    const {charList, currFormatedFilms, error, currChar} = this.state;
    const {handleSelection} = this;
    return(
      <div className={"container"}>
        <SelectCar handleSelection={handleSelection} charList={charList}></SelectCar>
        {(!error) ? <DisplayCharMovies currFormatedFilms={currFormatedFilms} ></DisplayCharMovies>
        :<Error currChar={currChar}></Error> }
      </div>
    );
  }
}