import { Outlet, Link, NavLink, useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
// import { getHostVans } from "/api"

// export function loader({params}) {
//     return defer({van: getHostVans(params.id)}) 
// }
import { getVan } from "/api"///En attente de modifs
export async function loader({ params }) {
    return defer({van: getVan(params.id)}) 
}

function HostVansLayout() {
    const dataPromise = useLoaderData()

    function hostVan(van) { 
           return ( 
            <>
                <div className="host-vans-container">
                    <img src={van.imageUrl} className="host-vans-img" />
                    <div className="host-vans-description">
                        <i className={`van-type ${van.type} selected`}>
                            {van.type}
                        </i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                    </div>
                </div>
                <nav className="host-vans-nav">
                    <NavLink to="." end className={({isActive}) => isActive ? "host-active-link" : null}>Details</NavLink>
                    <NavLink to="pricing" className={({isActive}) => isActive ? "host-active-link" : null}>Pricing</NavLink>
                    <NavLink to="photo" className={({isActive}) => isActive ? "host-active-link" : null}>Photos</NavLink>
                </nav>
                <Outlet context={{van}} />
            </>
            )
        }

    return (
        <>
            <Link to="/host/vans" className="host-vans-link">← Back to all vans</Link>
            <div className="host-vans-div">
                <Suspense fallback={<h2>Loading ...</h2>}>
                    <Await resolve={dataPromise.van}>
                        {hostVan}
                    </Await>
                </Suspense>
            </div>
        </>
    )
}
export default HostVansLayout