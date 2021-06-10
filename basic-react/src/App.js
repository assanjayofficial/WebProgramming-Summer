import './App.css';
import {Component} from "react";
import Welcome from './components/welcome'
// const App = () => {
 
//   const student1 = "Jay";
//   // const student2 = "Jon";
//   // const student3 = "Bob";
//   return [
//   <div className ="container">
//   <h1>Hello World</h1>
//   <h3>Welcome {student1}</h3>
//   <h3>Welcome {student1}</h3>
//   <h3>Welcome {student1}</h3>
//   </div>
//   ];
// };

class App extends Component {
  render(){
    const student1 = "John doe"
    return (
      <>
      <h1>Hello World</h1>
      <Welcome />
      <Welcome />
     </>
    )
  }
}

export default App;
