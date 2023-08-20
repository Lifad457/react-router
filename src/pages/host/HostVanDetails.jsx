
import { useOutletContext } from "react-router-dom"

function HostVanDetails() {
    const {van} = useOutletContext()
    return (
        <h3>{van.description}</h3>
    )
}

export default HostVanDetails