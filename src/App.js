
import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Dashboardpage from './components/Dashboardpage';
import DisplayCard from './components/DisplayCard';
const App = () => {

  let [page,setPage]=React.useState(1);
  return (
    <Routes>
      <Route path="/" element={<Dashboardpage />} />
      <Route path="/card" element={<DisplayCard  page={page} setPage={setPage}/>} />
    </Routes>
  )
}

export default App;