import React from 'react'
import { HashLoader } from 'react-spinners'
import loadCSS from '../cssModules/loading.module.css'

const Loading = () => {
  return (
    <div className={loadCSS["load"]}>
        <HashLoader color='#7591ab' size='40px'/>
    </div>
  )
}

export default Loading