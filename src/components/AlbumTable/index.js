import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import newAlbum from '../../actions';
import { Album, NewAlbumForm } from '..';


const AlbumTable = ({ artist }) => {

    const artistAlbums = useSelector(state => state[artist])

    const [albumElements, setAlbumElements] = useState()
    const [submittedData, setSubmittedData] = useState()

    useEffect(() => {
        const renderAlbums = () => {
            return artistAlbums.map(album => <Album title='album' key={artistAlbums.indexOf(album)} chosenAlbum={album} />)
        }
        setAlbumElements(renderAlbums)
    }, [submittedData])

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        setSubmittedData(e)
        dispatch(() => (newAlbum(e)))
        e.target.reset()
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>album name</th>
                    <th>release date</th>
                    <th>cover art</th>
                    <th>favourite</th>
                </tr>
            </thead>
            <tbody title='artistAlbums'>
                {albumElements}
                <tr>
                    <td>
                        <NewAlbumForm artist={artist} formHandler={handleSubmit} />
                    </td>
                </tr>



            </tbody>
        </table>
    )
}

export default AlbumTable