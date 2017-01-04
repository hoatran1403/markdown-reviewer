import React from 'react';


const TextPreview = ({state, dispatch}) => {
  return(
    <div className="panel-body" rows="25" dangerouslySetInnerHTML={{__html:state.text.parsedText}}>
    </div>
  )
}

export default TextPreview;
