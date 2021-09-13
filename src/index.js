import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import App from './App'
import './index.css'

const initState =
{
    bloodOrange: [
        { name: "Cupid Deluxe", release_date: 2013, img_path: "https://media.pitchfork.com/photos/5929a466c0084474cd0c04a0/1:1/w_600/680201b4.jpg" },
        { name: "Negro Swan", release_date: 2018, img_path: "https://media.pitchfork.com/photos/5b7735baf60a9e325d3f01d5/1:1/w_600/blood%20orange_negro%20swan.jpg" },
        { name: "We Are Who We Are Soundtrack", release_date: 2020, img_path: "https://media.pitchfork.com/photos/5f68be6d50b6e57b54878fe5/master/pass/We-Are-Who-We-Are.jpg" }
    ],

    michaelKiwanuka: [
        { name: "Home Again", release_date: 2012, img_path: "https://images-na.ssl-images-amazon.com/images/I/616C9L3RXWL._SL1400_.jpg" },
        { name: "Love & Hate", release_date: 2016, img_path: "https://media.pitchfork.com/photos/5929b5a1c0084474cd0c245a/1:1/w_600/c8f64530.jpg" },
        { name: "kiwanuka", release_date: 2019, img_path: "https://media.pitchfork.com/photos/5da611bca8fd3600081edc8a/1:1/w_600/Kiwanuka.jpg" }
    ],

}

const addAlbum = (state = initState, action) => {
    switch (action.type) {
        case "ADD_ALBUM":
            console.log(action.payload.artist)
            state[action.payload.artist].push(action.payload.album)

            //.push(action.payload.album)
            return state
        default:
            return state
    }
}

const store = createStore(addAlbum, devToolsEnhancer())


ReactDOM.render(

    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'))

export default {initState}