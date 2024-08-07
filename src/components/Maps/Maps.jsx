import { MapContainer, TileLayer, useMap } from "react-leaflet"
import "./Maps.css"
import { DraggableMarker } from "../DraggableMarker/DraggableMarker"

export const Maps = ({ position }) => {
	const UpdateMapCenter = ({ position }) => {
		const map = useMap()
		map.setView(position)
		return null
	}

	return (
		<div>
			<MapContainer
				center={position}
				zoom={12}
				scrollWheelZoom={true}
				className="mapNuevo"
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<UpdateMapCenter position={position} />
				<DraggableMarker center={position} />
			</MapContainer>
		</div>
	)
}
