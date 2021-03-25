import React, {useState}from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DeleteItem, updateItem} from './Actions'
import Update from './Update' 


function display() {
  
  const dispatch = useDispatch();
  const items = useSelector(state => state.data);

  
    return (
        <div>
            <ul>
             {items.map(item => (
             <div className="card">
             <div className="card-body">
               <h5 className="card-title"> {item.title}</h5>
               <h6 className="card-subtitle mb-2 text-muted">{item.body}</h6>
               <button type="button" className="btn-danger delbutton" onClick={() => dispatch(DeleteItem(items, item.id))} >Delete</button>
             </div>
           </div>
            ))}
          </ul>
        </div>

    );
}

export default display;



// <div className="card bg-info">
// <div className="card-body text-center">
//  <li key={item.id}>
//    <span className="font-weight-bold">Body: </span>
//    {item.title} <br />
//    <span className="font-weight-bold">Title: </span>
//    {item.body}
//    <br />
//    <button type="button" className="btn-danger delbutton" onClick={() => dispatch(DeleteItem(items, item.id))} >Delete</button>
//    {/* <button type="button"   className="btn-secondary" onClick={() => setSlow(true)}>
//      update</button> */}

//  </li>
 
//  <br />
//  </div>
// </div>