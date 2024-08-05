import { useState, useRef, useMemo } from "react"
import { Marker, Popup } from "react-leaflet"

export const DraggableMarker = ({ center }) => {
	const [position, setPosition] = useState(center)
	const markerRef = useRef(null)

	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current
				if (marker != null) {
					setPosition(marker.getLatLng())
				}
			},
		}),
		[]
	)

	console.log(position)
	return (
		<Marker
			draggable={false}
			eventHandlers={eventHandlers}
			position={position}
			ref={markerRef}
		>
			<Popup minWidth={90}>
				<span>
					Estas en la latitud {position.lat} y longitud {position.lng}
				</span>
			</Popup>
		</Marker>
	)
}
