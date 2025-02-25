import './App.css'

function App() {

  const handleSubmit = e => {
    e.preventDefault()
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const user = {
      name,
      email
    }
    console.log(user);

    fetch('http://localhost:3000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('user Create success')
          from.reset()
        }

      })

  }

  return (
    <>

      <h1>Simple Crud Operation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  )
}

export default App
