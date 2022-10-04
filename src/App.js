import { Route, Routes } from "react-router-dom";
import AddComponent from "./pages/AddComponent";
import HomeComponent from "./pages/HomeComponent";
import LayoutComponent from "./pages/LayoutCompoent";
import ListComponent from "./pages/ListComponent";
import ViewComponent from "./pages/ViewComponent";



function App() {
 

  return (
    <>
    <Routes>
      <Route element={<LayoutComponent/>}>
        <Route path='/' element={ <HomeComponent/> }></Route>
        <Route path='/home' element={ <HomeComponent/> }></Route>
        <Route path='/list' element={ <ListComponent/> }></Route>
        <Route path='/add' element={ <AddComponent/> }></Route>
        <Route path='/view/:id' element={ <ViewComponent/> }></Route>
      </Route>
    </Routes>

   </>
  )
}

export default App;
