import FirstPage from './FirstPage';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StudentHome from './StudentHome';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';
import AddResult from './AddResult'
import ViewStudent from './ViewStudent';
import ViewCourse from './ViewCourse';
import EditStudent from './EditStudent';
import EditCourse from './EditCourse';

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<FirstPage/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/adminhome" element ={<Home/>} />
          <Route path="/studenthome" element ={<StudentHome/>} />
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/addcourse" element={<AddCourse/>}/>
          <Route path="/addresult" element={<AddResult/>}/>
          <Route path="/viewstudent" element={<ViewStudent/>}/>
          <Route path="/viewcourse" element={<ViewCourse/>}/>
          <Route path="/editstudent/:id" element={<EditStudent />}/>
          <Route path="/editcourse/:id" element={<EditCourse />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




// import { useState } from 'react';
// import FirstPage from './FirstPage';
// import Home from './Home';
// import Login from './Login';
// import Register from './Register';
// import Forgot from './Forgot';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import AddStudent from './AddStudent';
// import AddCourse from './AddCourse';
// import AddResult from './AddResult';
// import ViewStudent from './ViewStudent';
// import ViewCourse from './ViewCourse';
// import EditStudent from './EditStudent';
// import EditCourse from './EditCourse';
// import StudentHome from './StudentHome';

// function App() {
//   // State to track if the user is logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div style={{ marginTop: '-3.5rem' }}>
//       <BrowserRouter>
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<FirstPage />} />
//           <Route path="/register" element={<Register />} />
         
//           <Route path="/studenthome" element ={<StudentHome/>} />
//           <Route path="/adminhome" element={<Home />} />
//           <Route path="/forgot" element={<Forgot/>}/>
//           <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

//           {/* Protected routes */}
//           {isLoggedIn ? (
//             <>
              
//               <Route path="/addstudent" element={<AddStudent />} />
//               <Route path="/addcourse" element={<AddCourse />} />
//               <Route path="/addresult" element={<AddResult />} />
//               <Route path="/viewstudent" element={<ViewStudent />} />
//               <Route path="/viewcourse" element={<ViewCourse />} />
//               <Route path="/editstudent/:id" element={<EditStudent />} />
//               <Route path="/editcourse/:id" element={<EditCourse />} />
//             </>
//           ) : (
           
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

