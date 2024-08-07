import { useState, useEffect, useRef, useMemo } from "react"
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

	useEffect(() => {
		setPosition(center)
	}, [center])

	return (
		<Marker
			draggable={false}
			eventHandlers={eventHandlers}
			position={position}
			ref={markerRef}
		>
			<Popup minWidth={90}>
				<span>
					Estás en la latitud {position.lat} y longitud {position.lng}
				</span>
			</Popup>
		</Marker>
	)
}
