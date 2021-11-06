import React from 'react'
import Side from './component/Side'
import About from './component/About'
import Projects from './component/Projects';
import Vision from './component/Vision';

const App = () => {
  return (
    <React.Fragment>
      <Side/>
      <About/>
      <Projects/>
      <Vision/>
    </React.Fragment>
  );
}


export default App;
