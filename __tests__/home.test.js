import Home from '../pages/index'
// import render from "@testing-library/react"
const { render } = require("@testing-library/react")


describe("testing THE TEST",()=>{
    it("testtt runnnn",()=>{
        render(<h1>yoooooo</h1>)
    })
})

describe('Home', () => {
    it('renders a heading', () => {
      render(<Home/>)
  
      
    })
  })

  
describe('Home', () => {
    it('renders a heading', () => {
       const { getByText } = render(<Home />);
    
      // Assert that the heading is rendered
      const headingElement = getByText("Auction-based selling");
      expect(headingElement).toBeInTheDocument();
    
      // Simulate button click event
      const startSellingButton = getByText("Start Selling Now");
      fireEvent.click(startSellingButton);
    
      // Assert that the page navigates to the "register" route
      const registerHeading = getByText("Files in the Register Folder");
      expect(registerHeading).toBeInTheDocument();
    });
  });
 