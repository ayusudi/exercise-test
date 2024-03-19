import { useEffect, useState } from "react"

export default function UserPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="container py-4">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((el, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{el.id}</th>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}