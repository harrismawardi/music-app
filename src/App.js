import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import { Music, About } from './pages'
import { Header, Footer } from './layout'

const App = () => {

    const [backgroundColor1, setBackgroundColor1] = useState('red')
    const [backgroundColor2, setBackgroundColor2] = useState('white')
    const styling = {
        background: `linear-gradient(90deg, ${backgroundColor1}, ${backgroundColor2})`
    }

    useEffect(() => {
        const colorArr = ['yellow', 'red', 'orange', 'green']
        const colorIdx = () => {
            const index = Math.floor(Math.random() * colorArr.length)
            setBackgroundColor1(colorArr[index])
            let index2 = Math.floor(Math.random() * colorArr.length)
            while(index == index2){
                index2 = Math.floor(Math.random() * colorArr.length)
            }
            setBackgroundColor2(colorArr[index2])
        }

        setInterval(colorIdx, 2000)

        return () => {
            setBackgroundColor1('red');
            setBackgroundColor2('red');
        }
    }, [])


    return (
        <>
            <Header />
            <main style={styling}>
            <Switch>
                <Route exact path="/albums">
                    <Music />
                </Route>

                <Route path="/albums/:albumId">
                    <Music />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

            </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App;