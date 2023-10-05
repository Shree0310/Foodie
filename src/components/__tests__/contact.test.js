import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


//To group the test casses we use describe
describe("Contact us page test cases", ()=>{

    //Before running an test case we can use this
    beforeAll(() =>{
        console.log("before All");
    })
    //Will run before ecah of the test case, useful for some clean ups before each tset case
    beforeEach(() =>{
        console.log("before Each");
    })

    //Will be called after all the tests
    afterAll(()=>{
        console.log("After all");
    })

    //Will be called after each test case
    afterEach(()=>{
        console.log("After Each")
    })
    //can also write the name as "it"
    //"it" is an alias of test 
    it("Should load contact us component",()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load button inside my contact component",()=>{
    
        render(<Contact/>);
    
        const button = screen.getByPlaceholderText("Name");
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    })
    
    test("Should load two input boxes on the contact page", ()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    })
})
