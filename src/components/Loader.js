import React from 'react'
import load from './loading.gif'
export default function Loader() {
  return (
    <div>
      <img src={load} alt='' style={{
        width:'170px',
        height:'130px',
        position:'absolute',
        left:'45%'
      }}/>
    </div>
  )
}
