import React from 'react';



const TextInput = ({ showPreview, state }) => {
  let input;

  const handleOnChange = (event) => {
    event.preventDefault();
    showPreview(event.target.value);
  }

  return (
    <textArea onChange = {handleOnChange} className="form-control" rows="30" id="textInput" defaultValue = {state.text.parsedText}></textArea>
  )
}

export default TextInput;
