import React from 'react';


// const TextInput = React.createClass({
//   render(){
//     return(
//       <textArea className="form-control" rows="10" id="textInput"/>
//     );
//   }
// });

const TextInput = ({ showPreview, state }) => {
  let input
  return (
    <textArea onChange ={e =>{
      e.preventDefault()
      showPreview(input.value)
      // console.log(state.text);
    } } className="form-control" rows="10" id="textInput" ref={node => { input = node}} defaultValue = {state.text}></textArea>
  )
}

export default TextInput;
