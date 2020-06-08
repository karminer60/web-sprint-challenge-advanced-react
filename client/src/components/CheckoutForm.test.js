import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    // arrange
    const { getByText } = render(<App />); // render returns an object with a bunch of query functions

    // act
    const header = getByText(/Checkout Form/i);

    // assert that the header element is being rendered
    expect(header).toBeInTheDocument(); // toBeInTheDocument is called an assertion function


});


test("form shows success message on submit with form details", async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);

    fireEvent.change(firstNameInput, {
        target: { firstName: "firstName", value: "Karina" }
    });
    fireEvent.change(lastNameInput, {
        target: { lastName: "lastName", value: "Rodriguez" }
    });
    fireEvent.change(emailInput, {
        target: { email: "email", value: "karminer60@gmail.comt" }
    });
    fireEvent.change(messageInput, {
        target: { message: "message", value: "Hello, how are you?" }
    });

    // query for the submit button
    const submitButton = screen.getByText(/submit/i);

    // clicking the button
    fireEvent.click(submitButton);

    // assertion
    await screen.findByText(/"firstName": "Karina"/i);


});

});
