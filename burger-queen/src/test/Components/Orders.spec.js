import React from "react";
import Orders from "../../Components/Orders";
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history';
import { fireEvent, render, userEvent, screen, waitFor } from "@testing-library/react";
import {Router}  from 'react-router-dom';


test('should show orders',  () => {

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(),
      }));
  
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Orders />
      </Router>
    );
  
    // await waitFor(() => {
    //   expect(history.location.pathname).toBe('/orders');
    expect(screen.getByTestId("orderStatus"))
    // toHaveLength(1)
    // });
  });