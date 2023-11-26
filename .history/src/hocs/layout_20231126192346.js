import { ToastContainer } from "react-toastify.css";
import 'react-toastify/dist/react-toastify.css';

import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

const Layout=(props)=>{
    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout