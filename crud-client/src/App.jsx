// "use client";

import './App.css'
import Users from './Pages/Users'
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <div>
        <h2>Simple crud</h2>
        <Users users={users}></Users>
      </div>
    </>
  )
}

export default App;
