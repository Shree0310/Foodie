import { render,screen, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load the res menu  component", async ()=>{
    
    await act(async ()=>{
        return render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>      
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
       )
    });

    const accodionHeader = screen.getByText("Gourmet Cakes (5)");
    fireEvent.click(accodionHeader);


    const foodItems =  screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(5);

    //Before clicking on the add button
    expect(screen.getByText("0")).toBeInTheDocument();


    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    //On clicking on the Add button
    fireEvent.click(addBtns[0]);

    //Header should change
    expect(screen.getByText("1")).toBeInTheDocument();

    //When I click on the add button for the second time
    fireEvent.click(addBtns[1]);

    //Then there should be two items add to the cart
    expect(screen.getByText("2")).toBeInTheDocument();

    //In the cart component
    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart is Empty"));



});
