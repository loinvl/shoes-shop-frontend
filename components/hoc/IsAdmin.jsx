import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IsAdmin({ children }) {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  // handle check is admin
  useEffect(() => {
    // is not login, redirect to admin login
    if (!user) {
      router.push("/admin/auth/admin-login");
      return;
    }

    // is not admin, redirect to customer login
    if (user.UserRole != 1) {
      router.push("/");
      return;
    }

    // is admin, dont do anything
  }, []);

  return user && user.UserRole == 1 && children;
}
