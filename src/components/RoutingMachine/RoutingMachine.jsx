import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"

export const RoutingMachine = ({ waypoints }) => {
	const map = useMap()

	useEffect(() => {
		if (!map) return

		const routingControl = L.Routing.control({
			waypoints: waypoints.map((point) => L.latLng(point[0], point[1])),
			lineOptions: {
				styles: [{ color: "blue", weight: 4 }],
			},
			createMarker: function () {
				return null
			},
		}).addTo(map)

		return () => map.removeControl(routingControl)
	}, [map, waypoints])

	return null
}
