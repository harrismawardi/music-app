import React from 'react'

const Artist = (props) => {
    return (
        <>
          <h2>{props.name}</h2>
          <h3>{props.genre}</h3>
          <p>{props.intro}</p>  

        </>
    )
}

export default Artist