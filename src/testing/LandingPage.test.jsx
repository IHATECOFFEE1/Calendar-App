/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

describe('LandingPage', () => {
    test('renders LandingPage component', () => {
        render(<LandingPage />);
        screen.debug();
    });
    }
);