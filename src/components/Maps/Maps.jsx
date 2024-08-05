import { MapContainer, TileLayer } from "react-leaflet"
import "./Maps.css"
import { DraggableMarker } from "../DraggableMarker/DraggableMarker"
import { RoutingMachine } from "../RoutingMachine/RoutingMachine"

export const Maps = () => {
	const waypoints = [
		[-34.83566055594974, -58.27938256163055],
		[-34.82141014433114, -58.313382013252166],
		[-34.807042247749706, -58.17186645316777],
	]
	return (
		<div>
			<MapContainer
				center={waypoints[0]}
				zoom={12}
				scrollWheelZoom={true}
				className="mapNuevo"
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{waypoints.map((position, index) => (
					<DraggableMarker center={position} key={index} />
				))}
				<RoutingMachine waypoints={waypoints} />
			</MapContainer>
		</div>
	)
}
