import React from 'react'
import { PacmanLoader } from 'react-spinners'
import loadCSS from '../cssModules/loading.module.css'

const Loading = () => {
  return (
    <div className={loadCSS["load"]}>
        <PacmanLoader color='#7591ab' size='40'/>
    </div>
  )
}

export default Loading