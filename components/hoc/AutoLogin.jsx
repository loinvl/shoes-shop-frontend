import { loginSuccess } from "@/redux/userReducer";
import authUtil from "@/utils/authUtil";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AutoLogin({ children }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);

  useEffect(() => {
    (async () => {
      // render children after run use effect
      setRender(true);

      // if logged in
      if (user) {
        return;
      }

      // if is not log in, auto login when have access token
      const accessToken = await authUtil.getValidAccessToken();
      if (accessToken) {
        const user = authUtil.getUserPayload(accessToken);
        dispatch(loginSuccess(user));
        return;
      }
    })();
  }, []);

  return render && children;
}
