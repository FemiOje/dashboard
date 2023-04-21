import React from 'react'

const Home = () => {
  return (
    <div className="home md:grid-rows-2">
      <div className="price-cards flex flex-col items-center justify-around gap-4 md:grid-cols-4 md:flex-row"> {/* rename */}
        <div className="price-card-1 w-100 m-2 md:w-fit border shadow-sm">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>

        <div className="price-card-2 w-100 m-2 md:w-fit border shadow-sm">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>

        <div className="price-card-3 w-100 m-2 md:w-fit border shadow-sm">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>

        <div className="price-card-4 w-100 m-2 md:w-fit border shadow-sm">
          <h3>Armitage</h3>
          <p>$399.99</p>
        </div>

      </div>

      <div className="second-part flex flex-col justify-around items-center md:flex-row md:grid-cols-2 border"> {/* rename */}
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