import { useOutletContext } from "react-router-dom"

function HostVanPhoto() {
    const {van} = useOutletContext()
    return (
        <h1>{van.imageUrl}</h1>
    )
}

export default HostVanPhoto