import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className='home-page'>
            <div className='home-title'>You got the travel plans, we got the travel vans.</div>
            <div className='home-description'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
            <Link className='home-button' to="vans">Find your van</Link>
        </div>
    )
}

export default HomePage