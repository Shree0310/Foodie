import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListdata.json";
import { act } from "react-dom/test-utils";
import Body from "../Body";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should test if the top Rated Restaurants button is working", async ()=>{

    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        
        )
    });

    
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn); 
    
    const cardsAfterClick = screen.getAllByTestId("resCard");

    expect(cardsAfterClick.length).toBe(14); 
    
}) 