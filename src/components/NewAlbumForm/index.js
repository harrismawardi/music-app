import React from 'react'

const NewAlbumForm = (props) => {

    return (
        <form id={props.artist} onSubmit={props.formHandler}>
            <input type="submit" value="Add Album" /><br />
            <input id="name" type="text" placeholder="album name" />
            <input id="year" type="text" placeholder="release year" />
            <input id="img" type="text" placeholder="image address" />
        </form>
    )
}

export default NewAlbumForm;