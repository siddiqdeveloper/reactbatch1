import axios  from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'


const api = axios.create({
   baseURL:'http://localhost:3001/',
   headers: {'content-type': 'application/json'}
})


function ListComponent(){
   const[list,setList] = useState([]);

   useEffect(()=>{
      api.get('courses').then( (res)=>{
         console.log(res);
         setList(res.data);
      })


   },[])

   return <>
   
   
<div class="container">
  <h2>Course List</h2>
  <p>The .table-bordered class adds borders to a table:</p>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      { 

list && list.map((item)=>{

   return (<>
    <tr>
        <td>{item.title}</td>
        <td>Doe</td>
        <td> 
           <button className="btn btn-warning btn-sm">Delete</button>
         &nbsp;
           <button className="btn btn-primary btn-sm">View</button>
         </td>
      </tr>
     
      
      </>)
})
      }
     
    </tbody>
  </table>
</div>

   
   </>
}

export default ListComponent;