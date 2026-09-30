
import React from "react";
import { useState } from 'react';

const Cbox = (props)=>{

    const products = [
        {id:100, item:'Milk 1Lt',qty:10},
            {id:101, item:'Ghee 2kg',qty:3},
            {id:102, item:'Butter Milk',qty:4},
            {id:103, item:'Lussi',qty:7},
            {id:104, item:'Curd',qty:10},
            {id:105, item:'Milk Pow',qty:4}
    ];

    const reasons =[
        {
            id : 1, Reason : "Loss"},
            {id : 2, Reason : "Spoileed"},
            {id : 3, Reason : "Less Qty"
        }
    ];
    

const [selectedIds,setSelectedIds] = useState([])
const allSelected = selectedIds.length ===products.length;
const someSelected = selectedIds.length > 0 && !allSelected;

const [showDialog,setShowDailog] = useState(false)
const [reason,setReason] = useState("")

const toggleAll = ()=>{
    setSelectedIds(allSelected?[]:products.map((p)=>p.id));
};

const toggleRow = (id)=>{
  setSelectedIds((prev)=>
    prev.includes(id)?prev.filter((x)=>x !==id):[...prev,id]
  );
};

console.log(selectedIds);


    return(
       <div className="page">
        <h2>Products</h2>
            <p>Table with Check Box {props.name}</p>
            
            <table>
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>
                            <input
                            type="checkbox"
                            checked = {allSelected}
                            onChange={toggleAll}
                            ref={(el)=>{
                                if (el) el.indeterminate = someSelected;
                            }}
                            />
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((p)=>(
                        <tr key ={p.id}>
                            <td>{p.id}</td>
                            <td>{p.item}</td>
                            <td>{p.qty}</td>
                            <td><input type = 'checkbox'
                            checked={selectedIds.includes(p.id)}
                            onChange={()=>toggleRow(p.id)}
                            /></td>
                        </tr>
                    )
                     )}
                </tbody>

            </table>

            <button disabled = {selectedIds.length === 0 }
            onClick={()=>{setReason('');
                setShowDailog(true);}}
            > Add to Wastasge</button>
<button disabled = {selectedIds.length === 0 }
            onClick={()=>{setReason('');
                setShowDailog(true);}}
            > Add to Return</button>


{
    showDialog && (
        <div className="overlay" onClick={()=>setShowDailog(false)}>
            <div className="dailog" onClick={(e)=>e.stopPropagation()}>
                <h3> Add to wastage</h3>
                <select value={reason} onChange={(e)=>setReason(e.target.value)}>

                    <option value='' disabled> select a reason</option>
                    <option value='loss'>Loss</option>
                    <option value='wastage'>Wastage</option>

                </select>
                <button onClick={()=>setShowDailog(false)}> cancel</button>
                <button disabled={!reason} >Confirm</button>
            </div>
        </div>
    )
}
        </div>
    
        

    )
}

export default Cbox;