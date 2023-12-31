import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "/api"
import { Suspense } from "react"

export function loader() {
    return defer({vans: getHostVans()})
}

function HostVans() {
    const dataPromise = useLoaderData()

    function renderHostVansEls(vans) {
        const vanElements = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
            )
        )

        return (
            <div className="host-vans-list">
                <section>
                    {vanElements}
                </section>
            </div>
        )
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h2>Loading ...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderHostVansEls}
                </Await>
            </Suspense>
        </section>
    )
}

export default HostVans