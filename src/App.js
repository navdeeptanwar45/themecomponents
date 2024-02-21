import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DragDrop from "./components/DragDrop";
function App() {
  const [first, setfirst] = useState(0)
 setTimeout(() => {
  setfirst(prev=>prev+1)
 }, 500);
 return (
<>
<Counter heading={'Clients'} count={first}/>
</>
 )
}

export default App;

