import React, { useContext, useState } from 'react';
import {Form, Link} from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const [error,setError]= useState('')
    const [success,setSuccess]= useState('')
    
    const { user, createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegisterSubmit = (event) => {

      


        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo= form.photo.value;
        console.log(name, email, password,photo);
        setSuccess('')
        setError('')


        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Please add at least one uppercase')
            return  
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has created Success')
            })
            .catch(error => {
                setError(error.message);
                
            })
        }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <Form  onSubmit={handleRegisterSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="phot url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </Form>
                <p className='text-red-700'>{error}</p>
                <p className='text-blue-700'>{success}</p>

                <Link to="/login" className='pl-5 pb-5'> Already have an account<button className="btn btn-active btn-link">please login</button>  </Link>
            </div>
        </div>
    </div>
    );
};

export default Register;