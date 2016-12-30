import React from 'react';
import bootstrap from 'bootstrap';

//import components
import TextInput from './TextInput';
import TextPreview from './TextPreview';

const Main = React.createClass({
  render() {
    return (
      <div class="row">
      <div class="col-sm-6"><TextInput /></div>
      <div class="col-sm-6"><TextPreview /></div>
      </div>
    )
  }
});

export default Main;
