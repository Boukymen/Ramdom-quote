import React, {useState, useEffect} from 'react';
import './App.css';
import 'jquery-ui/ui/effect'
import 'jquery-ui/ui/effects/effect-fade'
import $ from 'jquery';
import quotes from './quotes';

import { BsTwitter, BsFacebook } from "react-icons/bs";
function App() {

const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");
const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const quote_index = Math.floor(Math.random() * 103);
// const setRandomColor = () => {
//   $("boby").css("background-color", getRandomColor());
// };
const newQuote = () => {
   const color = getRandomColor()
   $( "body").animate({
          backgroundColor: color,
          color: color,
    }, 600 );
    $( "#text, #author").animate({
          color: color,
    }, 600 );
    $( "#tweet-quote, #new-quote").animate({
      backgroundColor: color,
    }, 600 );
    
    $( "#text, #author, #quote-box, #byme " ).hide( "fade", {color: '#fff'}, 800,  setTimeout(function() { 
      $( "#text, #author, #quote-box, #byme" ).removeAttr( "style" ).hide().fadeIn(); 
      setQuote(quotes[quote_index]["quote"]);
      setAuthor(quotes[quote_index]["author"]);
    }, 900 ) );
}
 useEffect(()=>{
    setQuote(quotes[quote_index]["quote"]);
    setAuthor(quotes[quote_index]["author"]);
 }, []);
//newQuote()
  return (
    <main>
      <div className="quote-box" id="quote-box">
        <div id="text" className="text" > 
          <span id="qt">"</span>
            {quote}
        </div>
        <div id="author" className="author" > 
          - {author}
        </div>
        <div className="btns">
          <div className="btns-post">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote} " . ${author} \n`} target="_blank" rel="noreferrer">
              <button id="tweet-quote">
                <BsTwitter />
              </button>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=github.com%2FBoukymen%2FRamdom-quote&quote="${quote}". ${author}`}target="_blank" rel="noreferrer">
              <button id="tweet-quote">
                <BsFacebook />
              </button>
            </a>

          </div>
          <button id="new-quote" onClick={newQuote} > 
          New quote
          </button>
        </div>
      </div>
      
        <h3 id="byme">By KONATE Bakary</h3>
    </main>
  );
}

export default App;