import { useState } from "react"

function AddCourse() {
    const [form,setForm] = useState({title:'',description:''});
 
    return (
        <>
        <form>
        <div class="form-group">
            <label for="tile">Title</label>
            <input type="email" class="form-control" id="title"  />
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" /> 
        </div>
        <br></br>
              <button type="submit" class="btn btn-primary">Save</button>
        </form>
        </>
    )
  }
  
  export default AddCourse