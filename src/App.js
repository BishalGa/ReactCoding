import React from 'react'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <div>
       <Navbar/>
      <BrowserRouter>
       <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}>
          
       </Route>
       <Route path="/Preferences" element={<Preferences/>}>
         
        </Route>
      </Routes>    </BrowserRouter>
     
    </div>
  )
}

export default App