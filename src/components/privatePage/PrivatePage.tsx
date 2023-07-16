import {useEffect} from "react";
import {logout} from "../../../src/features/login/authSlice";
import {useAppDispatch, useAppSelector} from "../../../src/app/hooks";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {getFirstProduct} from "../../../src/components/privatePage/privatePageSlice";

export const PrivatePage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn])


    useEffect(() => {
        debugger
        dispatch(getFirstProduct())
    }, [])

    return <div>
        <div>private page</div>
        <Button onClick={() => {
            dispatch(logout())
        }
        }>Logout</Button>
    </div>
}