import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IsLogin({children}){
    const user = useSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        console.log('da chay is login')
        if(!user){
            router.push('/auth/login');
        }
    }, []);

    return user && children;
}