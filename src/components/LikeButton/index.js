import React, { useEffect, useState } from 'react'

const LikeButton = () => {


    const [likeStatus, setLikeStatus] = useState('black');
    let styling = { color: likeStatus }

    const changeLikeStatus = () => {
        setLikeStatus(existing => existing == 'red' ? 'black' : 'red')
    }


    return <button onClick={changeLikeStatus} style={styling}>&hearts;</button>
}

export default LikeButton