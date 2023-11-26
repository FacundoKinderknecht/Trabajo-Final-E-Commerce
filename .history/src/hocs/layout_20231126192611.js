import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/inject-style.esm.mjs';

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