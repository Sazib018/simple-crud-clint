import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const params = useParams()

    const handleUpdate = (e) => {
        e.preventDefault()
        const id = params.id
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const user = {
            name,
            email
        }
        console.log(user);
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if (data.modifiedCount >0) {
              alert("Update successfully")
              from.reset()
            }
            
          })
        }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value={"Update"} />
            </form>
        </div>
    );
};

export default Update;