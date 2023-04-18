import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function IsLogout({children}){
    const user = useSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        if(user){
            if(user.UserRole == 0){
                router.push('/');
                return;
            }

            if(user.UserRole == 1){
                router.push('/admin');
                return;
            }

            return;
        }
    }, []);

    return !user && children;
}