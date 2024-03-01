import { render, screen, test, expect } from "@testing-library/react";
import Form from "./Components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<Form />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
