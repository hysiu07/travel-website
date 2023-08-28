import { useState, useContext } from 'react';
import { Nav } from '..';
import './Registration.scss';
import { UserContext } from '../../context/UserContext';
import { ThreeCircles } from 'react-loader-spinner';

type ErrorsType = {
	errorName: boolean | null;
	errorEmail: boolean | null;
	errorPass: boolean | null;
	errorRepeatPass: boolean | null;
};
type UserInfoType = {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
};
function Registration() {
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
	const [successRegistration, setSuccessRegistration] = useState<string>('')
	const userContext = useContext(UserContext);

	const [error, setError] = useState<ErrorsType>({
		errorName: null,
		errorEmail: null,
		errorPass: null,
		errorRepeatPass: null,
	});

	const [errorInfo, setErrorInfo] = useState({
		errorInfoName: '',
		errorInfoEmail: '',
		errorInfoPassword: '',
		errorInfoPasswordRepeat: '',
	});
	const [infoUser, setInfoUser] = useState<UserInfoType>({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const checkValidation = () => {
		if (
			error.errorName !== false ||
			error.errorEmail !== false ||
			error.errorPass !== false ||
			error.errorRepeatPass !== false
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
	const handleValidationRepeatPass = () => {
		if (infoUser.password !== infoUser.repeatPassword) {
			setError({
				...error,
				errorRepeatPass: true,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPasswordRepeat: 'You must enter the same passwords',
			});
		} else {
			setError({
				...error,
				errorRepeatPass: false,
			});
			setErrorInfo({
				...errorInfo,
				errorInfoPasswordRepeat: '',
			});
		}
		checkValidation();
	};
	const cleanInputs = () => {
		setInfoUser({
			name: '',
			email: '',
			password: '',
			repeatPassword: '',
		});
	};


	const submit: React.FormEventHandler = (e) => {
		e.preventDefault();
		userContext?.setUser({
			name: infoUser.name,
			email: infoUser.email,
			password: infoUser.password,
			logIn: true,
		});
		setShowLoader(true);
		setTimeout(() => {
			setShowLoader(false);
			cleanInputs();
		}, 3000);
	};

	return (
		<div className='registration'>
			<div className='registration__shadow'></div>
			<Nav />

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
						name='repeatPassword'
						type='password'
						placeholder='Repeat password'
						className='input-repeat-password'
						value={infoUser.repeatPassword}
						onChange={handleInfoUser}
						onBlur={handleValidationRepeatPass}
						style={
							error.errorPass ? { border: '2px solid red' } : { border: 'none' }
						}
					/>
					<p>{errorInfo.errorInfoPasswordRepeat}</p>

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
						REGISTER
					</button>
				</form>
			</div>
		</div>
	);
}
export default Registration;
