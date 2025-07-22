import { Route, Routes } from "react-router-dom";
import Beginning from '../pages/Beginning/Beginning.jsx'
import AboutUs from '../pages/AboutUs/AboutUs.jsx'
import Services from '../pages/Services/Services.jsx'
import Contacts from "../pages/Contacts/Contacts.jsx";

export default function MainRouter({ isLoading }) {
  const nuEtoDa = [
    { link: "/", element: <Beginning isLoading={isLoading} />, id: 1 },
    { link: "/about", element: <AboutUs />, id: 2 },
    { link: "/services", element: <Services />, id: 3 },
    { link: "/contacts", element: <Contacts />, id: 4 },
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
