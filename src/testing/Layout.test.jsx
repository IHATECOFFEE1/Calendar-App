/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout', () => {
    test('renders Layout component', () => {
        render(<Layout />);
        screen.debug();
    });
    }
);
