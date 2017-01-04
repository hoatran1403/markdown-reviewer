// Text Reducer
function text(state = {parsedText : 'FCC Markdown Previewer'}, action){
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
