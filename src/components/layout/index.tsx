import React from 'react'
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.scss"

const Layout: React.FC = () => {
  return (
    <div className={styles.appLayout}>
      <Link to="/home">Back</Link>
      <Outlet />
    </div>
  )
}

export default Layout