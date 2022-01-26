import React from 'react'
import { Link } from "react-router-dom";
import notFound from "../common/imgs/404.jpg"

const NotFound: React.FC = () => {
  return(
    <div>
      <img src={notFound} alt="404" />
      <Link to="/home">Back to home</Link>
    </div>
  )
}

export default NotFound