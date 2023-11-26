import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/react-toastify.css';

import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

const layout=(props)=>{
    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000}/>

        </div>
    )
}