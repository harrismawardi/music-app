import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import  'react-router-dom'

import BackButton from '../BackButton'

const mockHistory = jest.fn()


jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        goBack: mockHistory
    })
}))

describe('BackButton', () => {

    beforeEach(() => {
        render(<BackButton />)
    })

    test('history goBack method to be called', () => {
        const button = screen.getByRole('button', { name: 'goback' })
        userEvent.click(button)
        console.log(history)
        expect(mockHistory).toBeCalled()
    })
})