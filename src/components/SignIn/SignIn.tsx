import { useState, useContext} from 'react';
import { Nav } from '../';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import { UserContext } from '../../context/UserContext';

type inputValueTypes = {
	email: string;
	password: string;
};

function SignIn() {
	const userContext = useContext(UserContext);
	console.log(userContext?.user);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<inputValueTypes>({
		email: '',
		password: '',
	});

	const checkValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target;
		const name = target.name;

		setInputValue({
			...inputValue,
			[name]: target.value,
		});
		if (inputValue.email !== '' && inputValue.password !== '') {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	};
	const logIn = () => {
		
	}

	return (
		<div className='signin'>
			<div className='signin__shadow'></div>
			<Nav />
			<div className='signin__panel'>
				<h3 className='title'>Please login</h3>
				<form action='' className='form'>
					<input
						name='email'
						type='email'
						placeholder='Email address'
						className='input-email'
						onChange={checkValue}
					/>
					<input
						name='password'
						type='password'
						placeholder='Password'
						className='input-pass'
						onChange={checkValue}
					/>
					<p>Forgotten password</p>
					<button
						type='submit'
						className='btn-login'
						disabled={disabledBtn}
						style={
							disabledBtn
								? { backgroundColor: 'gray', backgroundImage: 'none' }
								: { backgroundColor: '' }
						}
					>
						Login
					</button>
				</form>
				<button className='btn-register'>
					<Link to='/registration' className='link-registration'>Registration</Link>
				</button>
			</div>
		</div>
	);
}
export default SignIn;
