import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        setUsers(data);
    }, [data])



    const handleDelete = id => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Delete Successfully")
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }

            })

    }
    return (
        <div>
            <h1>User Count : {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name} Email: {user.email}
                        <button onClick={() => handleDelete(user._id)}>X</button>
                        <Link to={`/update/${user._id}`}>Update</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default Users;