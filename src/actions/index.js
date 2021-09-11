const newAlbum = e => {
    
    return {
        type: "ADD_ALBUM",
        payload: {
            artist: e.target.id,
            album: {
                name: e.target.name.value,
                release_date: e.target.year.value,
                img_path: e.target.img.value
            }
        }
    }
}

export default newAlbum