import React, {useEffect, useState} from 'react'

import { LikeButton } from '..'

const Album = ({chosenAlbum}) => {

    const styling = { height: '50px' }

    return (
        <tr>
            <td role='cell'>{chosenAlbum.name}</td>
            <td role='cell'>{chosenAlbum.release_date}</td>
            <td role='cell'><img style={styling} src={chosenAlbum.img_path} alt="cover art"></img></td>
            <td role='cell'><LikeButton /></td>
            <td role='cell'><button aria-label='show tracks'>Show Tracks</button></td>
        </tr>
    )
}

export default Album