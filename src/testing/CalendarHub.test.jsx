/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarHub from '../components/CalendarHub';

describe('CalendarHub', () => {
    test('renders CalendarHub component', () => {
        render(<CalendarHub />);
        screen.debug();
    });
    }
);
