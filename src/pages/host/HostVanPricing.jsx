import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
    const {van} = useOutletContext()
    return (
        <h1>{van.price} $</h1>
    )
}

export default HostVanPricing