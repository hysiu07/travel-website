import { Nav } from '../';
import './SignIn.scss';

function SignIn() {
	return (
		<div className='signin'>
			<div className='signin__shadow'></div>
			<Nav />
			<div className='signin__panel'>
				<h3 className='title'>Please login</h3>
				<form action=''className='form'>
					<input type='email' placeholder='Email address' className='input-email'/>
					<input type='password' placeholder='Password' className='input-pass'/>
					<p>Forgotten password</p>
					<button type='submit' className='btn-login'>LOGIN</button>
					<button className='btn-register'>Register</button>
				</form>
			</div>
		</div>
	);
}
export default SignIn;
