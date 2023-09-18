import { useState, useContext } from 'react';
import { Nav } from '../../components';
import './Registration.scss';
import { UserContext } from '../../context/UserContext';
import { ThreeCircles } from 'react-loader-spinner';
import { SnackBar } from '../../container/SnackBar';
import { Link } from 'react-router-dom';
import { ErrorsType, UserInfoType } from '../../types';

function Registration() {
	const userContext = useContext(UserContext);
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [successRegistration, setSuccessRegistration] =
		useState<boolean>(false);
	const [signInBtn, setSignInBtn] = useState<boolean>(false);

	const [error, setError] = useState<ErrorsType>({
		errorName: null,
		errorEmail: null,
		errorPass: null,
		errorConfirmPass: null,
	});

	const [errorInfo, setErrorInfo] = useState({
		errorInfoName: '',
		errorInfoEmail: '',
		errorInfoPassword: '',
		errorInfoPasswordConfirm: '',
	});
	const [infoUser, setInfoUser] = useState<UserInfoType>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const checkValidation = () => {
		if (
			error.errorName !== false ||
			error.errorEmail !== false ||
			error.errorPass !== false ||
			error.errorConfirmPass !== false
		) {
			setDisabledBtn(true);
		} else {
			setDisabledBtn(false);
		}
	};

	const handleInfoUser: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target;
		const name = target.name;

		setInfoUser({ ...infoUser, [name]: target.value.trim() });
	};

	const handleValidationName = () => {
		if (infoUser.name.length <= 5) {
			setError({
				...error,
				errorName: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoName: 'Your Name is to short!',
			});
		} else {
			setError({
				...error,
				errorName: false,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoName: '',
			});
		}
		checkValidation();
	};
	const handleValidationEmail = () => {
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(infoUser.email)) {
			setError({
				...error,
				errorEmail: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoEmail: 'Your email is invalid',
			});
		} else {
			setError({
				...error,
				errorEmail: false,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoEmail: '',
			});
		}
		checkValidation();
	};
	const handleValidationPass = () => {
		if (infoUser.password.length <= 5) {
			setError({
				...error,
				errorPass: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPassword: 'You password should be longer than 5 characters',
			});
		} else if (!/^[^\s]*$/.test(infoUser.password)) {
			setError({
				...error,
				errorPass: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPassword: 'Your password shouldn`t have empty character',
			});
		} else if (
			!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(infoUser.password)
		) {
			setError({
				...error,
				errorPass: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPassword: 'Your should contain special characters (@ ! # $)',
			});
		} else {
			setError({
				...error,
				errorPass: false,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPassword: '',
			});
		}
		checkValidation();
	};
	const handleValidationConfirmPass = () => {
		if (infoUser.password !== infoUser.confirmPassword) {
			setError({
				...error,
				errorConfirmPass: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPasswordConfirm: 'You must enter the same passwords',
			});
		} else {
			setError({
				...error,
				errorConfirmPass: false,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPasswordConfirm: '',
			});
		}
		checkValidation();
	};
	const clearInputs = () => {
		setInfoUser({
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
	};

	const timeOut = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(clearInputs());
			}, 3000);
		});
	};
	async function asyncFuncionRegistration() {
		await setShowLoader(true);
		await timeOut();
		await setShowLoader(false);
		await setSuccessRegistration(true);
		await userContext?.setUsersRegistration([
			...userContext.usersRegistration,
			infoUser,
		]);
		await setTimeout(() => {
			setSuccessRegistration(false);
		}, 5000);
		await setSignInBtn(true);
	}

	const submit: React.FormEventHandler = (e) => {
		e.preventDefault();
		asyncFuncionRegistration();
	};

	return (
		<div className='registration'>
			<div className='registration__shadow'></div>
			<Nav />
			<SnackBar
				text='Registration Success!'
				position={successRegistration ? { right: '50px' } : { right: '-300px' }}
			/>

			<div className='registration__panel'>
				<h3 className='title'>Registration</h3>
				<form action='' className='form' onSubmit={submit}>
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
					<input
						name='name'
						type='name'
						placeholder='Name'
						className='input-name'
						value={infoUser.name}
						onChange={handleInfoUser}
						onBlur={handleValidationName}
						style={
							error.errorName ? { border: '2px solid red' } : { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoName}</p>
					<input
						name='email'
						type='email'
						placeholder='Email address'
						className='input-email'
						value={infoUser.email}
						onChange={handleInfoUser}
						onBlur={handleValidationEmail}
						style={
							error.errorEmail
								? { border: '2px solid red' }
								: { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoEmail}</p>
					<input
						name='password'
						type='password'
						placeholder='Password'
						className='input-pass'
						value={infoUser.password}
						onChange={handleInfoUser}
						onBlur={handleValidationPass}
						style={
							error.errorPass ? { border: '2px solid red' } : { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoPassword}</p>
					<input
						name='confirmPassword'
						type='password'
						placeholder='Repeat password'
						className='input-repeat-password'
						value={infoUser.confirmPassword}
						onChange={handleInfoUser}
						onBlur={handleValidationConfirmPass}
						style={
							error.errorPass ? { border: '2px solid red' } : { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoPasswordConfirm}</p>

					<button
						type='submit'
						className='btn-register'
						disabled={disabledBtn}
						style={
							disabledBtn
								? { backgroundColor: 'gray', backgroundImage: 'none' }
								: { backgroundColor: '' }
						}
					>
						Register
					</button>
				</form>
				{signInBtn && (
					<button
						className='btn-signIn'
						onClick={() => {
							setSignInBtn(false);
						}}
					>
						<Link to='/signIn' className='link-signIn'>
							SignIn
						</Link>
					</button>
				)}
			</div>
		</div>
	);
}
export default Registration;