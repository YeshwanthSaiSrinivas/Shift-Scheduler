import React from 'react'
import errorCSS from '../cssModules/error.module.css'
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className={errorCSS["main"]}>
        <div className={errorCSS["fof"]}>
            <h1>Error 404</h1>
        </div>
        <div>
            <Link to="/"><button>Back to the homepage...</button></Link>
        </div>
    </div>
  )
}

export default Error