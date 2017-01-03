import React from 'react';


// const TextInput = React.createClass({
//   render(){
//     return(
//       <textArea className="form-control" rows="10" id="textInput"/>
//     );
//   }
// });

const TextInput = ({ showPreview, state }) => {
  return (
    // <textArea className="form-control" rows="10" id="textInput"/>
    <div>{state}</div>
  )
}

export default TextInput;
