import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import ListUserPage from "./Components/ListUserPage";

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
        <Routes>
          <Route path='/userlist' element={<ListUserPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
