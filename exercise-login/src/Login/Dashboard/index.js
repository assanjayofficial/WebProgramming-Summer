import React, {useEffect, useState} from 'react'
import Navbar from '../../molecules/NavBar'
import Card from '../../molecules/Card'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios'

const Dashboard = () => {

    const [users, setUsers] = useState([])

    useEffect (() => {
        //fetch
        // fetch('https://reqres.in/api/users').then(res=> res.json()).then(json => setUsers(json.data))
        //axios
        Axios.get('http://localhost:3004/users').then(res=> setUsers(res.data));
    }, [users])

    console.log(users);

    const addUser = () =>{
        const data ={
            avatar : 'https://source.unsplash.com/random',
            email : 'assansmith.com',
            first_name : 'Smith',
            last_name : 'Assan',
        }
        axios.post('http://localhost:3004/users', data)
    }

    return (
        <div className='container'>
            <Navbar/>
            <h3>Dashboard</h3>
            <hr/>
            <br/>
            <Link to="/InputData"><button className="btn btn-primary" onClick={addUser}>Tambah</button></Link>
            <div className='row align-items-start'>
                {
                    users.map( (item) => [
                        <Card
                        avatar={item.avatar}
                        fullName={`${item.first_name} ${item.last_name}`}
                        email = {item.email}
                        />
                    ])
                }
            </div>
        </div>
    )
}

export default Dashboard
