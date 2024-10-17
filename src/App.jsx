import './App.css'
import Counter from './counter.jsx';
import Teams from './Teams.jsx';
import Users from './users.jsx';
import Friends from './Friends.jsx';

function App() {

  function handleClick1(){
    alert('button 1 clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return ( 
    <>
      <h2>React core concepts part 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Teams></Teams>
      <Counter></Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick1}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> {alert('button 3 clicked')}}>Click Me 3</button>
      <button onClick={()=> addToFive(7)}>Click Me 4</button>
    </>
  )
}

export default App
