import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

export function parseText(inputText){
  var parsedText = marked(inputText);
  
  return {
    type: 'PARSE_TEXT',
    parsedText
  };
}
