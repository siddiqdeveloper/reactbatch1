import { useState } from "react";

function AddComponent(){
   const [form,setForm] = useState({courseName:'',description:''})

   const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(form);
   }

   return (<>
      <div className="container">
         <div className="row">
               <div className="col-md-5 col-offset-3" style={{marginLeft:'24%'}}>
                  <br/>
               <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="courseName">Course Name</label>
    <input type="text" onKeyDown={ (e)=>{
         setForm({...form,courseName:e.target.value});

    }} class="form-control" id="courseName" aria-describedby="emailHelp" placeholder="Course Name"/>
    <br/>
  </div>
  <div class="form-group">
    <label for="courseDesc">Course Description</label>
    <input type="text"  onKeyDown={ (e)=>{
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