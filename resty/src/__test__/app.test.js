import React from "react";
import {render,fireEvent,waitFor,screen} from '@testing-library/react'
import App from "../app";

describe('testing App',()=>{
    test('it load and start web',()=>{
        render(<App />);
        const result = screen.getByTestId('results')
        expect(result).toBeCalled;
    })
    test('it show us result when we press GO button',()=>{
        render(<App />);
        const mybutton = screen.getByRole("button")
        fireEvent.click(mybutton)
        const result = screen.getByTestId('results')
        expect(result).toBePartiallyChecked;
    })
})