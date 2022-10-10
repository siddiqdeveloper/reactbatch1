function ListComponent(){
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
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td> 
           <button className="btn btn-warning btn-sm">Delete</button>
         &nbsp;
           <button className="btn btn-primary btn-sm">View</button>
         </td>
      </tr>
     
    </tbody>
  </table>
</div>

   
   </>
}

export default ListComponent;