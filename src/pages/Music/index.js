import React, { useState } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { Artist, AlbumTable, BackButton } from '../../components'



const Music = () => {



    const [artistsObj, setArtistsObj] = useState(
        {
            michaelKiwanuka: [
                { name: "Home Again", release_date: 2012, img_path: "https://images-na.ssl-images-amazon.com/images/I/616C9L3RXWL._SL1400_.jpg" },
                { name: "Love & Hate", release_date: 2016, img_path: "https://media.pitchfork.com/photos/5929b5a1c0084474cd0c245a/1:1/w_600/c8f64530.jpg" },
                { name: "kiwanuka", release_date: 2019, img_path: "https://media.pitchfork.com/photos/5da611bca8fd3600081edc8a/1:1/w_600/Kiwanuka.jpg" }
            ],


            bloodOrange: [
                { name: "Cupid Deluxe", release_date: 2013, img_path: "https://media.pitchfork.com/photos/5929a466c0084474cd0c04a0/1:1/w_600/680201b4.jpg" },
                { name: "Negro Swan", release_date: 2018, img_path: "https://media.pitchfork.com/photos/5b7735baf60a9e325d3f01d5/1:1/w_600/blood%20orange_negro%20swan.jpg" },
                { name: "We Are Who We Are Soundtrack", release_date: 2020, img_path: "https://media.pitchfork.com/photos/5f68be6d50b6e57b54878fe5/master/pass/We-Are-Who-We-Are.jpg" }
            ]
        }

    )
    const params = useParams()

    return (
        <>
            <h1>Music App</h1>
            <BackButton />
            <Switch>
                <Route exact path="/albums">
                    <Artist name="Michael Kiwanuka" genre="Soul" intro="" />
                    <AlbumTable artist="michaelKiwanuka" />
                    <Artist name="Blood Orange" genre="Alternative" intro="" />
                    <AlbumTable artist="bloodOrange" />
                </Route>

                <Route path="/albums/:albumId">
                    <AlbumTable albums={artistsObj[params.albumId]} />
                </Route>
            </Switch>

        </>
    )
}

export default Music