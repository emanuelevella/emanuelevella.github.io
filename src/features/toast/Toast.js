import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const orderSuccess = () => toast("Order made!");
export const orderEditSuccess = () => toast("Order edited!");
export const orderQuantityFail = () => toast("You cannot buy more than 100 stocks!", {role: "alert"});
export const orderPriceFail = () => toast("The price cannot be greater than 1 000 000$!", {role: "alert"});

export default function Toast () {
    return (
        <ToastContainer position="top-center"/>
    )
}