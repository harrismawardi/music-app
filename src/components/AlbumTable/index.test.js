import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import 'react-redux';
import { useSelector } from 'react-redux';
import AlbumTable from './'

const mockDispatch = jest.fn();
const mockSelector = jest.fn()


jest.mock('react-redux', () => ({
    useSelector: jest.fn().mockReturnValue(
            [
                { name: "Home Again", release_date: 2012, img_path: "https://images-na.ssl-images-amazon.com/images/I/616C9L3RXWL._SL1400_.jpg" },
                { name: "Love & Hate", release_date: 2016, img_path: "https://media.pitchfork.com/photos/5929b5a1c0084474cd0c245a/1:1/w_600/c8f64530.jpg" },
                { name: "kiwanuka", release_date: 2019, img_path: "https://media.pitchfork.com/photos/5da611bca8fd3600081edc8a/1:1/w_600/Kiwanuka.jpg" }
            ]),
    useDispatch: () => mockDispatch
}));


describe('AlbumTable', () => {

    beforeEach(() => {
        render(<AlbumTable artist="michaelKiwanuka" />)
        jest.clearAllMocks()
    })

    test('correct number of <Album> elements rendered', () => {

        const rows = screen.queryAllByRole('row', { name: 'albumInfo' })
        expect(rows.length).toBe(3)
    })

    test('click button will rerender albums', () => {
        const form = screen.queryByRole('form', { name: 'michaelKiwanukaForm' })
        const button = within(form).queryByRole('button', { name: 'submit' })
        userEvent.click(button)
        expect(mockDispatch).toBeCalled()
        expect(useSelector).toBeCalledTimes(2)
    })

})

//test mapping elements

//test handleSubmit

//test if form is reset after submitting
//