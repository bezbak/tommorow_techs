import { Route, Routes } from "react-router-dom";
import Beginning from '../pages/Beginning/Beginning.jsx'
import AboutUs from '../pages/AboutUs/AboutUs.jsx'
import Services from '../pages/Services/Services.jsx'

export default function MainRouter() {
  const nuEtoDa = [
    {link:"/", element:<Beginning />, id:1},
    {link:"/aboutus", element:<AboutUs/>, id:2},
    {link:"/services", element:<Services/>, id:3},
]
  return (
    <Routes>
      {
        nuEtoDa.map((item) => (
          <Route path={item.link} element={item.element} key={item.id}></Route>
        ))
      }
    </Routes>
  )
}
