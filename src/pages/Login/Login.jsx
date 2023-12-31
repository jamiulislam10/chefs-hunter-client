import React, { useContext, useState } from 'react';
import { Form,Link,useLocation,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import GoogleLogin from './GoogleLogin';
const Login = () => {
  const [error,setError]=useState('');
    const {signIn}=useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
console.log('login loca',location);
const from = location.state?.from?.pathname|| '/'

const handleLoginSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password  = form.password.value;
        console.log(email,password);
 
        signIn(email,password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, {replace:true})
          // form.reset()
        })
        .catch(error =>{
          console.log(error);
          setError(error.message)
          event.target.reset()
        })
    }
    return (
      <div>
          <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col l:flex-row-reverse">
          <div className="text-center l:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </Form>
            <p className='text-red-500 text-center'>{error}</p>
            <Link  to="/register"> Don't have an account <button  className="btn btn-active btn-link">Please register</button> </Link>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
     
      </div>
    );
};

export default Login;