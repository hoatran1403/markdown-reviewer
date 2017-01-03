import React from 'react';

// const TextPreview = React.createClass({
//   render(){
//     return(
//       <div className="panel-body">this is text Preview </div>
//     );
//   }
// });

const TextPreview = ({state, dispatch}) => {

  return(
    <div className="panel-body">{state.text}</div>
  )
}

export default TextPreview;
