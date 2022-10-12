import { useState } from "react";
import axios  from 'axios';
import Swal from 'sweetalert2'


const api = axios.create({
   baseURL:'http://localhost:3001/',
   headers: {'content-type': 'application/json'}
})

function AddComponent(){
   const [form,setForm] = useState({title:'',description:''})

   const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(form);
      api.post('courses',form).then( (res)=>{
         console.log(res);
         setForm({title:'',description:''});
         Swal.fire({
            title: 'Example',
            text: 'Swal injected',
            icon: 'error',
        });
      })
      
   }

   return (<>
      <div className="container">
         <div className="row">
               <div className="col-md-5 col-offset-3" style={{marginLeft:'24%'}}>
                  <br/>
               <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="title">Course Name</label>
    <input value={form.title}  type="text" onChange={ (e)=>{
         setForm({...form,title:e.target.value});

    }} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Course Name"/>
    <br/>
  </div>
  <div class="form-group">
    <label for="courseDesc">Course Description</label>
    <input value={form.description}    type="text"  onChange={ (e)=>{
         setForm({...form,description:e.target.value});

    }} class="form-control" id="courseDesc" placeholder="Course Description"/>
  </div>
  <br/>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

                     </div>
         </div>
      </div>
   </>);
}

export default AddComponent;