import { React, useState } from "react";
import "./Dictionary.css";
import Meaning from "./Meaning.jsx";

const Dictionary = () => {
  const [word, setWord] = useState("Dictionary");
  const [wordMeanings, setWordMeanings] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  const handleSearchMeaning = async (e) => {
    e.preventDefault();
    
    try {
        setLoading(true)
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      console.log(response);
      if (response.ok == true) {
        const data = await response.json();
        
        setWordMeanings(data[0].meanings[0].definitions);
        console.log(data[0].meanings[0]);
        console.log(data[0].meanings[0].definitions);
        setError(false)
        setLoading(false)
        // console.log(data)
      } else {
        setError(`cant find the meaning of ${word}`);
        setWordMeanings(null)
        setLoading(false)
        
      }
    } catch (err) {
      setError(
        `there was an error searching for the meaning of ${word}. Please check your internet and try again.`
      );
      setWordMeanings(null)
      setLoading(false)
    }

    // console.log(api)
  };
  return (
    <>
      <section className="search-section">
        <h1>
          by <a href="https://github.com/iankmani">Ian</a>
        </h1>
        <h1>type any word to find its meaning</h1>
        <form className="search-section-form">
          <input
            type="text"
            className="search-section-input"
            placeholder="type a name to Search"
            onChange={handleWord}
          />
          <button
            onClick={handleSearchMeaning}
            className="search-section-form-button"
          >
            Search {word}
          </button>
        </form>
      </section>
      <div className="meanings">
        {/* {
            console.log(wordMeanings)
        } */}
         {error && <p className="error">{error}</p>}
         {loading && <p>loading...please wait</p>}
        {wordMeanings &&
          wordMeanings.map((current, i) => {
            <Meaning
              partOfSpeech={current.partOfSpeech}
              definitions={current.definition}
              key={(i)}
            />
          })}
         
      </div>
    </>
  );
};

export default Dictionary;
