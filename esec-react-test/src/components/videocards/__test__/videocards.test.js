import React from 'react'
import ReactDOM  from 'react-dom'
import VideoCards from '../VideoCards'

import {render,cleanup,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement("div"); 
    ReactDOM.render(<VideoCards />,div);
})

test('render video cards', () => {
    render(<VideoCards /> );
    const videoCardElement = screen.getByTestId('videocard');
    expect(videoCardElement).toBeInTheDocument();
    // expect(videoCardElement).toHaveTextContent();
    // expect(videoCardElement).toContainHTML();
});

test('matches snapshot', () => {
    const tree = renderer.create(<VideoCards /> ).toJSON;
    expect(tree).toMatchSnapshot();
    // expect(videoCardElement).toHaveTextContent();
    // expect(videoCardElement).toContainHTML();
});