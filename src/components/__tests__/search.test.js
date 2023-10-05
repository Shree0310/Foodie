import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListdata.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//Mocking the fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            //mock data nad pass it on to fetch 
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search res list for burger input", async ()=>{
    
    //wrap your Render into an act() function whenever you are using fetch, state management etc
    await act(async () =>
        render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
        )
    );
    
    //Number of res Cards that are there before searching
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    //Testing if there are 20 cards before searching        
    expect(cardsBeforeSearch.length).toBe(20);
    
    //Getting the search button by role of a button with name Search
    const searchBtn = screen.getByRole("button", {name: "Search"});
    
    //Testing if the Search button is present on the screen
    expect(searchBtn).toBeInTheDocument();

    //Binded the input tag with the id searchInput already in the Body component        
    const searchInput = screen.getByTestId("searchInput");
    
    //the object is simulating what we are getting inside the "e" of the onChange in the Body Component
    //When we are typing burger in the input box
    fireEvent.change(searchInput, {target: {value: "burger"}});
    
    //Then we are firing the click event by clicking on the search button
    fireEvent.click(searchBtn);

    //screen should load 1 card with burger
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    //Testing if the screen loads 1 card after the search button has been clicked
    expect(cardsAfterSearch.length).toBe(1); 
    
});