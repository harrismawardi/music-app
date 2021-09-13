import React, { useEffect, useState } from 'react'

import { LikeButton } from '..'

const Album = ({ chosenAlbum }) => {

    const styling = { height: '50px' }

    return (
        <tr title='albumInfo'>
            <td title='name'>{chosenAlbum.name}</td>
            <td title='year'>{chosenAlbum.release_date}</td>
            <td title='img'><img style={styling} src={chosenAlbum.img_path} alt="cover art"></img></td>
            <td><LikeButton /></td>
            <td><button aria-label='show tracks'>Show Tracks</button></td>
        </tr>
    )
}

export default Album