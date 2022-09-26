import {ApiService} from '../services/Services'
import { useState ,useEffect} from "react"
import { Link } from 'react-router-dom';
function ListCourse() {
  const [list,setList] = useState([]);

  useEffect(()=>{
    getdata();

  },[])

 const  getdata = () =>{ ApiService.get('http://localhost:3001/courses').then((res)=>{
    console.log(res);
    setList(res.data);
    })}


  const deleteItem = (id) =>{
    ApiService.delete("http://localhost:3001/courses/"+id).then((res)=>{
      getdata();
    })
  }


 
  return (

      <>

<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  {list && list.map((item)=>{
    return <>
    
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td> <Link to={'/view/' + item.id} > View</Link> <span style={{cursor:'pointer'}} onClick={ ()=>{ deleteItem(item.id)}}>Delete</span> </td>
  </tr>
    
    </>
  })}
 
 
</tbody>
</table>
      
      
      </>
  )
}

export default ListCourse