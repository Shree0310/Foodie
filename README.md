 # Namaste react 

 # Parcel
 - Dev Build
 - local server
 - HMR = Hot Module Replacement (Auto Referesh )
 - file Watching algorithm- written in c++
 - Faster builds because of caching
 - Image optimization
 - Minification of the files
 - Bundling of the files
 - Compressing of the files
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling: To support older browsers 
 - Error handling
 -Diagnostics
 - Https 
 - Tree Shaking - remove unused code for you
 - Different Dev & Prod bundles
  
  # Food Ordering App
  /**
 * Header
 * - Logo
 * - Nav Items 
 * Body
 * - Search
 *  - Restaurant Container
 * - Restaurant Card  
 *  --Restaurant name
 *  --Image
 *  --star ratings
 *  --ETA
 *  --Cuisines
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 # Two types of export/import
 - default export/import
 export default component name;
 import component from "path"

 -named import/export
  export const Component;
  import {Component} from "path";

  # React Hooks
   (Normal JS Utility functions)
   -useState() : used to generate powerful state variables in react
   useState maintains the state of component
   -useEffect()

   # Two types of routing in Web 
   -Server Side Routing: You make a network call and the html page is coming from the server 
   -Client Side Routing: You don't make any network calls while going from one page to another (present in SPAs) 

   # Redux Toolkit
   - Install @reduxjs/toolkit and react redux
   - npm install @reduxjs/toolkit
   -  npm i react-redux 
   - Build our store
   - Connect store to the app
   - Create a cart slice
   Dispatch an action on add button click
   Read data using Selector

   # Different types of testing (developer)
   - Unit Testing : testing react omponents in isolation
   - Integration testing: testing the flow of actions, multiple components that are talking to each other for a functionality
   - End to End testing(e2e tseting): Testing from when the user lands on the page till when the user leaves the pages, testing different flows

   # Testing libraries for React
   - React testing library

   # Setting up testing in our app
   - Install React Testing Library
   - Installed Jest
   - Installed Babel dependencies
   - Configure Babel
   - Configure Parcel Config file to disable default babel transpilation
   - Jest configuration - npx jest --init
   - install JSDOM library
   - install @babel/preset-react to make jsx work in test cases
   - include babel preset inside the babel config
   - install @testing-library/jest-dom 
   - add  "watch-test": "jest --watch" to package.json

   ```echo "foodie.sourashreeart.com" > docs/CNAME```



  



