import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PublicLayoutPage = () => {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   );
};

export default PublicLayoutPage