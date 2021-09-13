import React from 'react'

const NewAlbumForm = (props) => {

    return (
        <form role='form' title={`${props.artist}Form`} onSubmit={props.formHandler}>
            <input aria-label="submit" type="submit" value="Add Album" /><br />
            <input aria-label="name" type="text" placeholder="album name" />
            <input aria-label="year" type="text" placeholder="release year" />
            <input aria-label="img" type="text" placeholder="image address" />
        </form>
    )
}

export default NewAlbumForm;