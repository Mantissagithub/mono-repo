import {SignUp} from "ui";
import axios from 'axios';

export default function SignUp(){
    return (
        <div>
            <SignUp onClick = {async (username, password)  => {
                const response = await axios.post("/api/signup", {
                    username,
                    password
                });
                localStorage.setItem("token", response.data.token);
            } } >
            </SignUp>
        </div>
    )
}