import { useEffect, useState } from 'react';
import './Map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';

type PropsMapsType = {
	position: [number, number];
	country: string;
};
function Map({ position, country }: PropsMapsType) {

	function SetViewOnClick({ coords }: any) {
		const map = useMap();
		map.setView(coords, map.getZoom());

		return null;
	}
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
				<Marker
					position={position}
					icon={new Icon({ iconUrl: markerIconPng })}
				>
					<Popup >
						{country}
					</Popup>
				</Marker>
				<SetViewOnClick coords={position} />
			</MapContainer>
		</div>
	);
}
export default Map;
