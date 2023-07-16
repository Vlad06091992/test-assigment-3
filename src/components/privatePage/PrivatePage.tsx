import {useEffect} from "react";
import {logout} from "features/login/authSlice";
import {useAppDispatch, useAppSelector} from "app/hooks";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {getFirstProduct} from "components/privatePage/privatePageSlice";
import styles from "./privatePage.module.css"

export const PrivatePage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const product = useAppSelector(state => state.privatePage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn])


    useEffect(() => {
        dispatch(getFirstProduct())
    }, [])

    return <div>
        <div className={styles.privatePage}>
            <div className={styles.column}>
                <img src={product.image}/>
            </div>
            <div className={styles.column}>
                <p>{product.title}</p>
                <p>{product.description}</p>
            </div>
        </div>
        <div>
            <Button onClick={() => {
                dispatch(logout())
            }
            }>Logout</Button>
        </div>

    </div>
}