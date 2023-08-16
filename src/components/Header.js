import { LOGO_URL } from "../utils/constants";



//All the react code is kept inside the src folder
//It is a JS object
//Another way of writing the css 

const styleHeader ={
    backgroundColor : "beige"
}
 
 //Header Component
const Header = () =>{
    return (
        //If we want to write any javascript in JSX then we write it in {}
        <div className="header" style={styleHeader }>
            <div className="logo-container">
                <img 
                className="logo"
                src=   {LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us  
                    </li>
                    <li>
                        <img 
                        className="cart-logo"
                        src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg" />
                    </li>
                </ul>
        </div>
        </div>
        
    )
}

//Exporting the header
export default Header;