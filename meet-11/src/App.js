import {Component} from 'react';
import ListStudent from './components/ListStudent';

class App extends Component {
  state ={
    isShow : true,
  };
  toggleButton = () => {
    this.setState({isShow: !this.state.isShow})
  }
  render(){
    const backend = [
      {
        name : 'John',
        address : 'Manado'
      },
      {
        name : "Jane",
        address : "Airmadidi"
      },
      {
        name : "Bobby",
        address : "Tomohon"
      },
    ]
    const webprogramming = [
      {
        name : 'Karen',
        address : 'Canada'
      },
      {
        name : "Benjamin",
        address : "Nevada"
      },
      {
        name : "Tracy",
        address : "Chicago"
      },
    ]
    return (
      <>
      {
        this.state.isShow &&
          <ListStudent title="Back-end Programming Class" students ={backend}/>
        
      }
      {/* <ListStudent title="Web Programming Class" students = {webprogramming}/> */}
      <button onClick={this.toggleButton}>Toggle List Student</button>
      </>
    )
  }
}

export default App;