import { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { SnackBar } from '../../container/SnackBar';
import { Nav } from '../../components';
import { Link, useNavigate } from 'react-router-dom';

import { inputValueTypes } from '../../types';

import connect from 'react-redux/es/components/connect';
import { loggInUser } from '../../redux/reduxUserInfo';

import './SignIn.scss';
function SignIn({ loggInUser, usersRegistered,infoUser }: any) {
	const navigate = useNavigate();

	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [snackBar, setSnackBar] = useState(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<inputValueTypes>({
		email: '',
		password: '',
		isLoggIn: true,
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
			isLoggIn: false,
		});
	};

	async function asyncProcessLogIn() {
		setShowLoader(true);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(clearInputs());
			}, 3000);
		});
		setShowLoader(false);
		setSnackBar(true);

		setTimeout(() => {
			setSnackBar(false);
		}, 3000);
		setDisabledBtn(true);
		await setTimeout(() => {
			navigate('/travel-website');
		}, 2000);
	}

	const handleLoggIn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		usersRegistered.forEach((user: any) => {
			if (
				inputValue.email === user.email &&
				inputValue.password === user.password
			) {
				asyncProcessLogIn();

				loggInUser({
					name: user.name,
					bestTravels: [...infoUser.bestTravels],
					...inputValue,
				});
				setErrorInfo('');
			} else {
				setErrorInfo('Wrong name or password');
			}
		});
		return;
	};

	return (
		<div className='signin'>
			<div className='signin__shadow'></div>
			<Nav />
			<SnackBar
				text='Login Success!'
				position={snackBar ? { right: '50px' } : { right: '-300px' }}
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
						onClick={(e) => {
							handleLoggIn(e);
						}}
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

const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user,
		usersRegistered: state.userRegistered.users,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		loggInUser: (user: any) => {
			dispatch(loggInUser(user));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
