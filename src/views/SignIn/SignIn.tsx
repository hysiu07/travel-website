import { useState, useContext } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { SnackBar } from '../../container/SnackBar';
import { Nav } from '../../components';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import { UserContext } from '../../context/UserContext';
import { inputValueTypes } from '../../types';

function SignIn() {
	const userContext = useContext(UserContext);
	const usersData = userContext?.usersRegistration;

	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [successLogIn, setSuccessLogIn] = useState(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<inputValueTypes>({
		email: '',
		password: '',
	});
	const [errorInfo, setErrorInfo] = useState<string>('');
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

	const clearInputs = () => {
		setInputValue({
			email: '',
			password: '',
		});
	};
	const timeOut = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(clearInputs());
			}, 3000);
		});
	};
	async function asyncFuncionLogIn() {
		await setShowLoader(true);
		await timeOut();
		await setShowLoader(false);
		await setSuccessLogIn(true);
		await setTimeout(() => {
			setSuccessLogIn(false);
		}, 5000);
		await setDisabledBtn(true);
	}

	const logIn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		usersData?.forEach((user) => {
			if (
				inputValue.email === user.email &&
				inputValue.password === user.password
			) {
				setErrorInfo('');
				asyncFuncionLogIn();
				localStorage.setItem(
					'user',
					JSON.stringify({
						name: user.name,
						email: inputValue.email,
						logIn: true,
					})
				);
				const userLocalStorage = localStorage.getItem('user');
				if (typeof userLocalStorage === 'string') {
					const user2 = JSON.parse(userLocalStorage);
					userContext?.setUser(user2);
				}
			} else {
				setErrorInfo('Wrong name or password');
			}
		});
	};

	return (
		<div className='signin'>
			<div className='signin__shadow'></div>
			<Nav />
			<SnackBar
				text='Login Success!'
				position={successLogIn ? { right: '50px' } : { right: '-300px' }}
			/>
			<div className='signin__panel'>
				<h3 className='title'>Please login</h3>
				{showLoader && (
					<ThreeCircles
						height='100'
						width='100'
						color='#398AB9'
						wrapperStyle={{}}
						visible={true}
						ariaLabel='three-circles-rotating'
					/>
				)}
				<form action='' className='form'>
					<input
						name='email'
						type='email'
						placeholder='Email address'
						value={inputValue.email}
						className='input-email'
						onChange={checkValue}
					/>
					<input
						name='password'
						type='password'
						placeholder='Password'
						value={inputValue.password}
						className='input-pass'
						onChange={checkValue}
					/>
					<p>Forgotten password</p>
					<p className='error'>{errorInfo}</p>
					<button
						type='submit'
						className='btn-login'
						disabled={disabledBtn}
						style={
							disabledBtn
								? { backgroundColor: 'gray', backgroundImage: 'none' }
								: { backgroundColor: '' }
						}
						onClick={logIn}
					>
						Login
					</button>
				</form>
				<button className='btn-register'>
					<Link to='/registration' className='link-registration'>
						Registration
					</Link>
				</button>
			</div>
		</div>
	);
}
export default SignIn;
