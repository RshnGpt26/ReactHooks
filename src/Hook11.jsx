import React, { useEffect, useState } from 'react'

import Loading from './Loading';
import Users from './Users';

const Hook11 = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();            
            // console.log(response);
            // console.log(data);
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading) {
        return <Loading />
    }

  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fluid mt-5">
          <div className="row text-center">
          {
              users.map((currentElem) => {
                const {id, avatar_url, login, type } = currentElem;
                return <Users id={id} img={avatar_url} user={login} prof={type} />
              })
          }            
          </div>
      </div>
    </>
  )
}

export default Hook11
