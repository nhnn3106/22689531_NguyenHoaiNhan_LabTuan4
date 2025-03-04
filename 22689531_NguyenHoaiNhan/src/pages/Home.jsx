import React from 'react'
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

const Home = () => {

    
return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <h1>Danh sách người dùng</h1>
        <UserList />
    </div>
    
);

  
}

export default Home