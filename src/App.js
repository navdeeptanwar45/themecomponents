import { useState } from "react";
import "./App.css";
import DragDrop from "./components/DragDrop";
function App() {
  const [childs,setChilds] = useState([1,2,3,4,5,6]);
  function handleDrop(dragIndex,dropIndex){
    const copychilds = [...childs]
    const temp = copychilds[dragIndex];
    copychilds[dragIndex]=copychilds[dropIndex];
    copychilds[dropIndex]=temp;
    setChilds(copychilds)
    
} 
console.log(childs)
 return (
<DragDrop handleDrop={handleDrop}>
  {childs.map((item,index)=><div key={index}  className='drag-main'>{item}</div>)}
</DragDrop>
 )
}

export default App;

