import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import Album from './'

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
        const albumTableCell = screen.queryByRole('cell', {name: "name"})
        expect(albumTableCell.textContent).toEqual('funky bunch')
    })

    test('does the release date render', () => {
        const albumTableCell = screen.queryByRole('cell', {name: "year"})
        expect(albumTableCell.textContent).toEqual('2000')
    })

    test('Does image tag render with correct link', () => {
        const albumTableCell = screen.queryByRole('cell', {name: 'img'})
        expect(albumTableCell.firstChild.nodeName).toBe('IMG')
        expect(albumTableCell.firstChild.src).toBe('https://link.com/')
    })

})