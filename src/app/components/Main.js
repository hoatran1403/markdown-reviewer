import React from 'react';

//import components
import TextInput from './TextInput';
import TextPreview from './TextPreview';

const Main = React.createClass({
  render() {
    return (
      <div className="row">
      <div className="col-sm-6"><TextInput /></div>
      <div className="col-sm-6"><TextPreview /></div>
      </div>
    )
  }
});

export default Main;
