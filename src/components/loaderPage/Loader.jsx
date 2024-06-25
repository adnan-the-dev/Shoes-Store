import React from 'react'

export default function Loader({show}) {
  return show &&(
    <div style={{textAlign:'center',padding:'4px'}}>
        <h1>Loading....</h1>
    </div>
  )
}
