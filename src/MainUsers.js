import React, { useState, useEffect } from "react";
import ModalExampleModal from "./ModelExampleModal";
//import FormModal from "./FormModal.js";
import LoaderExampleInlineCentered from "./LoaderExampleInlineCentered";
import { Search , Button } from 'semantic-ui-react';
import axios from "axios";
import { Link } from 'react-router-dom';

let tempData = []

function MainUsers() {
    // const [value, setValue] = useState('');
    // const [data, setData] = useState(null);

    const [state, setState] = useState({
        value: '',
        data: null,
    });

    // useEffect(() => {
    //     getData();
    //     const intervalId = setInterval(getData, 3000);

    //     return () => clearInterval(intervalId);
    // });

    const handleSearchChange = (event, { value }) => {
        const filteredData = tempData.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setState((prevState) => ({
            ...prevState,
            value,
            data: filteredData
        }))
    }

    const getUserComments = (usersList) =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(result =>{
            usersList = usersList.map(i => ({
                ...i,
                comments: result.data.filter(j => j.userId === i.id)
            }));

            // usersList.forEach(i=> {
            //     console.log(i)
            // });

            setState((prev)=>({
                ...prev,
                data: usersList
            }))
            tempData = usersList;

        })
    }

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => {
           getUserComments(result.data)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setState((prev)=>({
                    ...prev,
                    data:null
                }
            ))
        });
    }

    useEffect(() => {
        getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const { data, value } = state;

    return (
        <>
            <Search
                className='card-user'
                loading={value !== ''}
                placeholder='Search...'
                onSearchChange={handleSearchChange}
                value={value}
                showNoResults={false}
            />
            <div className='card-user'>
            {data && data.map((user) => (
                    //<Link to={`/users/${user.id}`} key={user.id}>
                        <ModalExampleModal key={user.id} identity={user.id} user={user} />
                   // </Link>
                ))}
                {!data && (
                    <div>
                        <LoaderExampleInlineCentered />
                    </div>
                )}
            </div>
            <div style={{ marginTop: 10 }}>
                {/* <FormModal /> */}
                <div style={{ marginTop: 10 }}>
                <Link to='createUser' >
                <Button  sx={{ color: '#fff' }}>
                    AddUser
                </Button>
            </Link>
            </div>
            </div>
        </>
    )
}

export default MainUsers;
