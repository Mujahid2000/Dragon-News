
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        
        console.log('Name:', name);
        console.log('Photo:', photo);
        console.log('Email:', email);
        console.log('Password:', password);


        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
        <h2 className="text-3xl my-10 text-center">Register your account</h2>
        <hr />
        <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Your Name</span>
        </label>
        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo URL</span>
        </label>
        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
        </div>
            <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
        </div>
        </form>
        <p className='text-center mt-6'>Already have an account ? <Link className='underline visited:text-purple-600' to='/login'>Login</Link></p>
        </div>
        </div>
    );
};

export default Register;