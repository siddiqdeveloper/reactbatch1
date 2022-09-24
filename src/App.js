import { Route, Routes } from "react-router-dom";
import AddCourse from "./pages/AddCourse";
import ListCourse from "./pages/CourseList";
import Home from "./pages/Home";
import Layout from "./pages/Layout";


function App() {
 

  return (

    <Routes>
      <Route path="/" element={<Layout/>} >

    <Route path="/" element={ <Home />} ></Route>
    <Route path="/add-course" element={ <AddCourse />} ></Route>
    <Route path="/list" element={ <ListCourse />} ></Route>

    </Route>

  </Routes>

  )
}

export default App;
