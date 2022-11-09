/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
    test('renders Navbar component', () => {
        render(<Navbar />);
        screen.debug();
    });
    }
);