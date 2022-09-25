import { useState } from "react"
import {ApiService} from '../service/api'
import Swal from "sweetalert2";

function AddCourse() {
    const [form,setForm] = useState({title:'',description:''});

    const updateTitle = (e) =>{
        setForm({...form,title:e.target.value})
    }

    const updateDec = (e) =>{
        setForm({...form,description:e.target.value})

    }


    const save = (e) =>{
        e.preventDefault()
        console.log(form);
        ApiService.post('http://localhost:3001/courses',form,)
          .then(function (response) {
            console.log(response);

            Swal.fire({
                title: "Good job!",
                text: "You clicked the button",
                icon: "error"
              });
              setForm({title:''})
          })
          .catch(function (error) {
            console.log(error);
          });

    }


 
    
    return (
        <>
        <form>
        <div className="form-group">
            <label >Title</label>
            <input type="text" className="form-control" value={form.title} onChange={updateTitle} id="title"  />
        </div>
        <div className="form-group">
            <label >Description</label>
            <input type="text" className="form-control" onChange={updateDec} id="description" /> 
        </div>
        <br></br>
              <button onClick={save}  className="btn btn-primary">Save</button>
        </form>
        </>
    )
  }
  
  export default AddCourse