import React from "react";
import { render,fireEvent,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    // arrange
    const { getByText } = render(<CheckoutForm/>); // render returns an object with a bunch of query functions

    // act
    const header = getByText(/Checkout Form/i);

    // assert that the header element is being rendered
    expect(header).toBeInTheDocument(); // toBeInTheDocument is called an assertion function


});


test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip/i);

    fireEvent.change(firstNameInput, {
        target: { firstName: "firstName", value: "Karina" }
    });
    fireEvent.change(lastNameInput, {
        target: { lastName: "lastName", value: "Rodriguez" }
    });
    fireEvent.change(addressInput, {
        target: { email: "address", value: "38 st" }
    });
    fireEvent.change(cityInput, {
        target: { message: "city", value: "San Francisco" }
    });
    fireEvent.change(stateInput, {
        target: { message: "state", value: "CA" }
    });
    fireEvent.change(zipInput, {
        target: { message: "zip", value: "94110" }
    });

    // query for the submit button
    const checkoutButton = screen.getByText(/submit/i);

    // clicking the button
    fireEvent.click(checkoutButton);

    // assertion
    await screen.findByText(/Karina RODRIGUEZ/i);


});


