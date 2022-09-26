import { useState,useEffect } from "react"
import {ApiService} from '../services/Services'
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


function Viewcourse() {
    const id = useParams();
    console.log(id.id);

    
    const [form,setForm] = useState({title:'',description:''});

    const updateTitle = (e) =>{
        setForm({...form,title:e.target.value})
    }

    const updateDec = (e) =>{
        setForm({...form,description:e.target.value})

    }

    useEffect(()=>{
        ApiService.get('http://localhost:3001/courses/'+id.id).then((res)=>{
        console.log(res);
        setForm(res.data);
        })
    
      },[])


    const save = (e) =>{
        e.preventDefault()
        console.log(form);
        ApiService.post('http://localhost:3001/courses',form,)
          .then(function (response) {
            console.log(response);

            Swal.fire({
                title: "Good job!",
                text: "Your data has been stored succesfully ",
                icon: "success"
                
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
            <input type="text" className="form-control" value={form.description} onChange={updateDec} id="description" /> 
        </div>
        <br></br>
              <button onClick={save}  className="btn btn-primary">Save</button>
        </form>
        </>
    )
  }
  
  export default Viewcourse;
  