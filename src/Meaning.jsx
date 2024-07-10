import React from 'react'

const Meaning = ({partOfSpeech, definitions}) => {
  return (
    <div className='meaning' style={{color: 'black'}}>
        <h3 className='meaning-part-of-speech'>{partOfSpeech}</h3>
        <ol className="meanings-ordered-list">
            {
                definitions && definitions.map((current, i) => <li key={i} >{current.definition}</li>)
            }
        </ol>
    </div>
  )
}

export default Meaning