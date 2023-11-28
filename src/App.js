import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./crud/Home";
import Create from "./crud/Create";
import Update from "./crud/Update";
import Delete from "./crud/Delete";
import View from "./crud/View";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home></Home>}></Route>
                <Route path={'/create'} element={<Create></Create>}></Route>
                <Route path={'/update/:id'} element={<Update></Update>}></Route>
                <Route path={'/delete/:id'} element={<Delete></Delete>}></Route>
                <Route path={'/view/:id'} element={<View></View>}></Route>
            </Routes>
        </>
    );
}

export default App;
