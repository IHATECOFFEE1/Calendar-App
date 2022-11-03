/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
    test('renders Footer component', () => {
        render(<Footer />);
        screen.debug();
    });
    }
);