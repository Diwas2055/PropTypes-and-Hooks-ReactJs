import React  from 'react';
import './App.css';
import Hooks from './component/Hooks';
import HooksClass from './component/HooksClass';
// import Home from './component/Home';

function App() {
  //PropTypes Example
  // function calAge(){}
  // return <Home name="Diwas" age={20} calAge={calAge} />;
 return(
   <div>
     <Hooks />
   <HooksClass />
   </div>
   
 )

};

export default App;
