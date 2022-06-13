import axios from 'axios';
import React, {useState, useEffect} from 'react';

function AppApi(){
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchUsers = async()=>{
      try{
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch(e){
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if(loading) return <div>loading...</div>;
  if(error) return <div>Error</div>;
  if(!users) return null;
  return(
    <ul>
      {users.map(user=>{
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      })}
    </ul>
  )
}

export default AppApi;