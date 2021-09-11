import React from 'react'



const changeBackground = () => {
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
            const index2 = Math.floor(Math.random() * colorArr.length)
            setBackgroundColor2(colorArr[index2])
        }

        setInterval(colorIdx, 2000)

        return () => {
            setBackgroundColor1('red');
            setBackgroundColor2('red');
        }
    }, [])

    return Styling

}