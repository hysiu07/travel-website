import './Contact.scss';
import video from '../../video/video2.mp4';
function Contact() {
	return (
		<div className='contact' id='contact'>
			<video src={video} muted autoPlay loop></video>
			<div className='contact__shadow'>
				<div className='contact__box-first'>
					<div className='contact__text'>
						<p className='litle-title'>Keep in touch</p>
						<p className='big-title'>Travel with us</p>
					</div>
					<form action='' className='contact__form'>
						<label htmlFor=''>
							<input type='text' placeholder='Enter Email Adress' className='input'/>
							<button type='submit' className='button'>Send!</button>
						</label>
					</form>
                </div>
                <div className="contact__box-second"></div>
			</div>
		</div>
	);
}
export default Contact;
