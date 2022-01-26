import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the John's App!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/layout/promotion">Promotion</Link>
        <br />
        <Link to="/layout/hooks">Hooks</Link>
        <br />
        <Link to="/layout/ref">Ref</Link>
      </nav>
    </>
  )
}

export default Home