import React from "react";
import { NavBar } from "../../Components/NavBar";
import logoBurguer from "../../Assets/logoBurguer.png";
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';
// import { useNavigate } from "react-router";
import '@testing-library/jest-dom'
import { fireEvent, render, userEvent, screen } from "@testing-library/react";



// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(() => { })
// }));



describe('Nav Bar', () => {
  it('show  views', () => {

    const history = createMemoryHistory({ initialEntries: ['/home'] });

    render(
    <Router location={history.location} navigator={history}>
        <NavBar />
    </Router>)
    
  
        fireEvent.click(screen.getByTestId('burgerHome'));
        fireEvent.click(screen.getByTestId('menu'));
        fireEvent.click(screen.getByTestId('orders'));
        fireEvent.click(screen.getByTestId('products'));
        fireEvent.click(screen.getByTestId('userManagement'));
    // expect(screen.getByTestId('burgerHome')).toBeInTheDocument();

  })
});
