import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderExampleInlineCentered from './LoaderExampleInlineCentered';
import { useParams } from 'react-router-dom';

function UserDetails({ match }) {
    const [user, setUser] = useState(null);

    const { userId } = useParams();


    const getUser=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(result => {
           setUser(result.data)
            
        })
    }

    useEffect(() => {
        getUser();
    });

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ) : (
                <LoaderExampleInlineCentered />
            )}
        </div>
    );
}

export default UserDetails;
