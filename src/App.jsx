import { useState } from "react"
import { Maps } from "./components/Maps/Maps"

const App = () => {
	const [coordenadas, setCoordenadas] = useState([
		-34.83566055594974, -58.27938256163055,
	])

	const waypoints = [
		[-34.83566055594974, -58.27938256163055],
		[-34.82141014433114, -58.313382013252166],
		[-34.807042247749706, -58.17186645316777],
	]

	const handleClick = (coord) => {
		setCoordenadas(coord)
	}

	return (
		<>
			<ul>
				{waypoints.map((waypoint, index) => (
					<li key={index}>
						<button
							onClick={() => handleClick(waypoint)}
						>{`Lat: ${waypoint[0]}, Lng: ${waypoint[1]}`}</button>
					</li>
				))}
			</ul>
			<Maps position={coordenadas} />
		</>
	)
}

export default App
