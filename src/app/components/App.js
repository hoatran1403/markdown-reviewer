import React from 'react';
import InputText from '../containers/InputText';
import PreviewText from '../containers/PreviewText';


const App = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <InputText />
        </div>
        <div className="col-sm-6">
          <PreviewText />
        </div>
      </div>
    );
  }
})

export default App;
