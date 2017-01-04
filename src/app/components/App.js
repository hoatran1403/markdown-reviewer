import React from 'react';
import InputText from '../containers/InputText';
import PreviewText from '../containers/PreviewText';



const App = React.createClass({

  render() {

    return (
      <div className="container-fluid">
        <h1 className="text-center title">Markdown Previewer</h1>
        <div className="row">
          <div className="col-sm-6">
            <InputText />
          </div>
          <div className="col-sm-6 jumbotron">
            <PreviewText />
          </div>
        </div>
        <div className="footer">
          <p className="text-center">Developed by <a href="http://hoath.surge.sh/" target="__blank">Tran Huu Hoa</a></p>
          <div className="text-center"><h6>Check out source code at my <a href="https://github.com/hoatran1403/markdown-reviewer" target="__blank">Github</a></h6></div>
        </div>
        </div>

    );
  }
})

export default App;
