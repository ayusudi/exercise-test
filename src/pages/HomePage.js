import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="py-4 px-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
        <p className="col-md-8 fs-4">To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself</p>
        <Link to="/users" className="btn btn-primary btn-lg" type="button" role="button">Users List</Link>
      </div>
    </div>
  )
}