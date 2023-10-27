import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from '../../components';
import './Registration.scss';
import { UserContext } from '../../context/UserContext';
import { ThreeCircles } from 'react-loader-spinner';
import { SnackBar } from '../../container/SnackBar';
import { ErrorsType, UserInfoType } from '../../types';

import { connect } from 'react-redux';
import { addUser } from '../../reduxUsersRegistration/redux';

function Registration({ registeredUser, addUser }: any) {
	console.log(registeredUser);
	const userContext = useContext(UserContext);
	const navigate = useNavigate();
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [successRegistration, setSuccessRegistration] =
		useState<boolean>(false);
	const [userDataProcessingConsent, setUserDataProcessingConsent] =
		useState(false);
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
			error.errorConfirmPass !== false ||
			userDataProcessingConsent !== false
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
	useEffect(() => {
		handleValidationConfirmPass();
	}, [infoUser]);

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
		await setDisabledBtn(true);
		await setUserDataProcessingConsent(false);
		await setError({
			errorName: null,
			errorEmail: null,
			errorPass: null,
			errorConfirmPass: null,
		});
		await setTimeout(() => {
			navigate('/signIn');
		}, 2000);
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
					<label htmlFor='name'></label>
					<input
						name='name'
						type='name'
						id='name'
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
					<label htmlFor='email'></label>
					<input
						name='email'
						type='email'
						id='email'
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
						onChange={(e) => {
							handleInfoUser(e);
						}}
						onBlur={handleValidationConfirmPass}
						style={
							error.errorPass ? { border: '2px solid red' } : { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoPasswordConfirm}</p>
					<div>
						<input
							type='checkbox'
							onChange={(e) => {
								setUserDataProcessingConsent(() => {
									if (e.target.checked) {
										return true;
									} else {
										return false;
									}
								});
							}}
							checked={userDataProcessingConsent}
						/>
						<span> I consent to the processing of my personal data. </span>
					</div>

					<button
						type='submit'
						className='btn-register'
						disabled={disabledBtn}
						onClick={() => {
							addUser(infoUser);
						}}
						style={
							disabledBtn
								? { backgroundColor: 'gray', backgroundImage: 'none' }
								: { backgroundColor: '' }
						}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return { registeredUser: state.userRegistered.users };
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		addUser: (infoUser: UserInfoType) => {
			dispatch(addUser(infoUser));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
