import { Nav, Header, Destinations, LastMinute, About, Insurance, Reviews, Contact } from '../components';
function MainView() {
	return (
		<div>
			<Nav />
			<Header />
			<Destinations />
			<LastMinute />
			<About />
			<Insurance />
			<Reviews />
			<Contact />
		</div>
	);
}
export default MainView;
