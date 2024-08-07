import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export const MapasJS = () => {
	const mapContainerRef = useRef(null)

	useEffect(() => {
		const map = L.map(mapContainerRef.current, {
			center: [51.505, -0.09],
			zoom: 13,
		})

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map)

		return () => {
			map.remove()
		}
	}, [])

	return (
		<div
			id="map"
			ref={mapContainerRef}
			style={{ height: "300px", width: "300px" }}
		/>
	)
}
