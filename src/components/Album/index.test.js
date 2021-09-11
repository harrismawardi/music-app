import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import Album from './index'

describe('Album', () => {

    let container = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        const testAlbum = {name:"funky bunch", release_date:2000, img_path:"https://link.com/"};
        render(<table><tbody><Album chosenAlbum={testAlbum}/></tbody></table>);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    test('Does album name render', () => {
        const albumTableCells = screen.queryAllByRole('cell')
        expect(albumTableCells[0].textContent).toEqual('funky bunch')
    })

    test('does the release date render', () => {
        const albumTableCells = screen.queryAllByRole('cell')
        expect(albumTableCells[1].textContent).toEqual('2000')
    })

    test('Does image tag render with correct link', () => {
        const albumTableCells = screen.queryAllByRole('cell')
        expect(albumTableCells[2].firstChild.nodeName).toBe('IMG')
        expect(albumTableCells[2].firstChild.src).toBe('https://link.com/')
    })

})