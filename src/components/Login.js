import React, { useState } from 'react';

const Login = ({setUsername}) => {
  const [user,setUser] = useState({username : '', password: ''});
  const handle = () => {
    //kode untuk menyimpan nama dan password dalam local storage.
    localStorage.setItem('username',user.username)
    localStorage.setItem('password',user.password)
    setUsername(localStorage.getItem('username'))
   };


  const updateUser= e => {
    const key = e.target.id
    setUser( existingValues => (
       {
          ...existingValues,
          [key]:e.target.value,
       }
    ))
  }


  return ( 
        <>
        <div class="container my-5 py-5">
        <div class="row">
          <div class="col-12 col-sm-7 col-md-6 m-auto">
            <div class="card border-0 shadow">
              <div class="card-body text-center">
                <h1 class="fw-bold">LOGIN</h1>
                <form action="">
                  <input type="text" id="username" class="form-control my-4 py-2" placeholder="Username" 
                  value={user.username} onChange={updateUser}/>
                  <input type="password" id="password" class="form-control my-4 py-2" placeholder="Password" 
                  value={user.password} onChange={updateUser}/>
                  <div class="text-center mt-3">
                    <button class="btn btn-danger" onClick={handle}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Login;