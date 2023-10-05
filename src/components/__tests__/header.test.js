import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/appStore";
import { fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should load header componnet with a login button", ()=>{
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        
        );

        //const loginButton = screen.getByRole("button");

        //const loginButton = screen.getByText("Login");

        const loginButton = screen.getByRole("button", {name: "Login"});

        expect(loginButton).toBeInTheDocument();
    
});

it("should load header componnet with cart items 0", ()=>{
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        
        );

        const cartItems = screen.getByText("0");

        expect(cartItems).toBeInTheDocument();
    
});

it("should load header componnet with cart item", ()=>{
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        
        );

        //By using regex
        const cartItems = screen.getByText(/0/);

        expect(cartItems).toBeInTheDocument();
    
});

it("should change login button to logout button on click", ()=>{
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
        
        );

        //const loginButton = screen.getByRole("button");

        //const loginButton = screen.getByText("Login");

        
        const loginButton = screen.getByRole("button", {name: "Login"});

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", {name: "Logout"});

        expect(logoutButton).toBeInTheDocument();
});