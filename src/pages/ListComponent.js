import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const api = axios.create({
   baseURL:'http://localhost:3001/',
   headers: {'content-type': 'application/json'}
})


function ListComponent(){
   const[list,setList] = useState([]);


   const deleteItem = (item) =>{
      console.log(item);

      api.delete('courses/'+item.id).then( (res)=>{
         getdata();
        
      })
   }

   useEffect(()=>{
      getdata();
   },[])


   const getdata= () =>{

      api.get('courses').then( (res)=>{
         console.log(res);
         setList(res.data);
      })

   }

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
        <td>{item.description}</td>
        <td> 
           <button className="btn btn-warning btn-sm" onClick={()=>{
            deleteItem(item)
           }}>Delete</button>
         &nbsp;
           <button className="btn btn-primary btn-sm" >

           <Link to={'/view/'+item.id} style={{color:'white'}}>View</Link>

           </button>
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