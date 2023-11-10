import React from 'react'
import { BrowserRouter, Outlet, Route, Routes}  from 'react-router-dom';
import './style.css';
import Header from './components/Header';


function App() {
    return (
        <>
        <Header />
        <Outlet />
        </>
        
    )
}

// function App() {
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route index path='/' element={<RestForm />}>
//             <Route path='/home' element={<ManualPick />} />
//         </Route>
//         </Routes>

//         </BrowserRouter>
//     )
// }

export default App;
