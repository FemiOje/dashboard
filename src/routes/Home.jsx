import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="price-cards"> {/* rename */}
        <div className="price-card-1">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>
        <div className="price-card-2">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>
        <div className="price-card-3">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>
        <div className="price-card-4">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>
      </div>

      <div className="second-part"> {/* rename */}
        <div className="second-part-one"> {/* rename */}
          <p>Hello 1</p>
        </div>

        <div className="second-part-two">{/* rename */}
          <p>Hello 2</p>
        </div>
      </div>

    </div>
  )
}

export default Home