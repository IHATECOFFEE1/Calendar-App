/**
 * @jest-environment jsdom
*/

import React from 'react';
import CalendarHub from '../components/CalendarHub';
import SideTab from '../components/CalendarHub/SideTab';
import CalendarUI from '../components/CalendarHub/Calendar';
import { render, screen } from '@testing-library/react';

describe('Testing Rendering CalendarHub Elements', () => {
    test('renders CalendarHub component', () => {
        render(<CalendarHub />);
        screen.debug();
    });

    test('renders SideTab component', () => {
        render(<SideTab />);
        screen.debug();
    });

    test('renders CalendarUI component', () => {
        render(<CalendarUI />);
        screen.debug();
    });
    }
);
