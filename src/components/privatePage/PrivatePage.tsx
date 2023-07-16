import {useEffect} from "react";
import {logout} from "../../../src/features/login/authSlice";
import {useAppDispatch, useAppSelector} from "../../../src/app/hooks";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

export const PrivatePage = () => {
    const navigate = useNavigate();
    const isLggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        if(!isLggedIn){
            navigate('/login');
        }
    },[isLggedIn])

    return <div>
        <div>private page</div>
        <Button onClick={()=>{
        dispatch(logout())
        }
        }>Logout</Button>
        </div>
}