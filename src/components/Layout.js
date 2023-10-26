import React from 'react'
import '../cssModules/layout.css'
import Card from './Card'

const Layout = ({shifts}) => {
  return (
    <div className='container'>
        {
            shifts.map(shift => (
                <div>
                      <Card shift={shift}/>
                </div>
            ))
        }
    </div>
  )
}

export default Layout