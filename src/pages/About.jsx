import image from '../images/image_54.png'

function About() {
  return (
    <div className='about-container'>
      <img src={image} className='about-image' alt="image" />
      <div className='about-title'>Don’t squeeze in a sedan when you could relax in a van.</div>
        <div className='about-description'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </div>
        <div className='about-box'>
          <h2>
            Your destination is waiting.
            <br />
            <br />
            Your van is ready.
          </h2>
          <div className='about-button' role='button'>Explore our vans</div>
        </div>
    </div>
  )
}

export default About