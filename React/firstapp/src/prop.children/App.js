import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Apple from './Apple'
import Bag from './Bag'
import Pears from './Pears'
// function Header(){
//   return(
//     <h1>Hello World!</h1>
//   )
// }
function App(){
let title="This is some heading title "
return(
    <>
  <Bag >
    <Apple color="yellow" number="5" />
  </Bag>
  <Bag>
    <Pears friend="Peter"></Pears>
  </Bag>
  </>
)
}

export default App;
