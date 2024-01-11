
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthProviders';
import { useContext } from 'react';

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);
    
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log('email:', email);
        console.log('password:',password);
        logIn(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location.state?location.state: '/');
        })
        .catch(error =>{
            console.log(error);
        })
        
    }

    return (
        <div>
        <Navbar></Navbar>  
        <div>
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <hr />
        <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
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
        <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p className='text-center mt-6'>Don't have an account ? <Link className='underline visited:text-purple-600' to='/register'>Register</Link></p>
        </div>
        </div>
    );
};

export default Login;