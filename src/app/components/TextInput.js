import React from 'react';


// const TextInput = React.createClass({
//   render(){
//     return(
//       <textArea className="form-control" rows="10" id="textInput"/>
//     );
//   }
// });

const TextInput = ({ showPreview }) => {

  console.log('run to this');
  return (
    <textArea className="form-control" rows="10" id="textInput"/>
  )
}

export default TextInput;
