import {Component} from 'react';

class ListStudent extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //       subtitle : "Welcome",  
    //     };
    // }
    state = {
        subtitle : "Welcome to :",
    };

    handleChange = () =>{
        this.setState({subtitle : "Selamat Datang"})
    }
    componentDidMount(){
        console.log('Component Did mount dijalankan');
    }
    componentDidUpdate(){
        console.log('Component did update jalan');
    }
    componentWillUnmount(){
        console.log('Component will unmount jalan');
    }
    render(){
        console.log ('render dijalankan');
        const {title, students} = this.props;
        return (
            <div>
        <h3>{title}</h3>
        <p>{this.state.subtitle}</p>
        <ul>
          {
            students.map((student)=> {
              return <li>{student.name}</li>;
            })
          }
        </ul>
        <button onClick={this.handleChange}>Change Subtitle</button>
        {/* <h3>Web Programming Class</h3>
        <ul>
          {
            webprogramming.map((student)=> {
              return <li>{student.name}</li>;
            })
          }
        </ul> */ }
    </div>
    
        )
    }
}

export default ListStudent;
