import React, { useState } from 'react'
import "../Style.css"

function Paragraph() {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddParagraph = () => {
    if (text.trim() !== "") {
      setParagraphs([...paragraphs, text]);
      setText("");
    }
  };

  return (
    <div className='paragraph'>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddParagraph}>Add Paragraph</button>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Paragraph