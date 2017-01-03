// Text Reducer
function text(state = 'initial state', action){
  switch (action.type) {
    case 'PARSE_TEXT':
      return Object.assign({}, state,{
        parsedText: action.parsedText
      })
      break;
    default:
    return state;

  }
}

export default text;
