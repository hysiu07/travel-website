import './Contact.scss';
function Contact() {
	return (
		<div className='contact' id='contact'>
			<div className='contact__container'>
				<div className='contact__box-first'>
					<div className='contact__text'>
						<p className='litle-title'>Keep in touch</p>
						<p className='big-title'>Travel with us</p>
					</div>
					<form action='' className='contact__form'>
						<input
							type='text'
							placeholder='Enter Email Adress'
							className='input'
						/>
						<button type='submit' className='button btn'>
							Send!
						</button>
					</form>
				</div>
				<div className='contact__box-second'></div>
			</div>
		</div>
	);
}
export default Contact;
