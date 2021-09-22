import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React, { useState } from 'react';
import swal from 'sweetalert';

function App() {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleValidate = (e) => {
    e.preventDefault();
    if (mail == "reactjs1234@gmail.com" && pass == "12345678") {
      swal("Successful Login", "Welcome to React JS", "success");
    }
    else {
      swal("Wrong Credentials", "Please try again", "error");
    }
  }

  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="App-logo" src={logo} width="600" />
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" value={mail} placeholder="Enter email address" onChange={(e) => setMail(e.target.value)} />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={pass} placeholder="Enter password" onChange={(e) => setPass(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
