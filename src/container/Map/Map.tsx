import { useEffect, useState } from 'react';
import './Map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type PropsMapsType = {
	position: [number, number];
};
function Map({ position }: PropsMapsType) {
	console.log(position);
	
	useEffect(() => {

	}, [position]);
	return (
		<div className='map'>
			<MapContainer
				className='aaa'
				center={position}
				zoom={5}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={position} icon={new Icon({ iconUrl: markerIconPng })}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
export default Map;
