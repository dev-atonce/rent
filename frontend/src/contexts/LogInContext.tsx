"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  use,
} from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FetchContext } from "./FetchContext";

export const LogInContext = createContext({});

export default function LogInProvider({
  children,
  token,
  setToken,
  user,
  setUser,
}: any) {
  const { onInsertLog }: any = useContext(FetchContext);
  const router = useRouter();

  const apiUrl = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/users/login`;

  const onLogIn = async (formData: any) => {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      console.log(res);

      if (res?.error) {
        let msg = "Log In Failed";
        if (res?.error?.message == "password is invalid.") {
          msg = "Invalid Password";
        } else if (res?.error?.message == "email not found") {
          msg = "Email Not Found!";
        }
        Swal.fire({
          toast: true,
          position: "top",
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        localStorage.setItem("accessToken", JSON.stringify(res?.accessToken));
        localStorage.setItem("userData", JSON.stringify(res?.userData));
        setToken(res?.accessToken);
        setUser(res?.userData);
        onInsertLog(
          res?.userData?.id,
          res?.userData?.id,
          "user",
          `${res?.userData?.username} Log In`
        );
        Swal.fire({
          toast: true,
          position: "top",
          icon: "success",
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          router.push("/webpanel/");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const noAuth = () => {
    router.push("/webpanel");
  };
  const onLogOut = () => {
    onInsertLog(user?.id, user?.id, "user", `${user?.username} Log Out`);
    setUser({});
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    Swal.fire({
      toast: true,
      position: "top",
      icon: "success",
      title: "Logged Out Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      router.push("/webpanel/auth/signin");
    }, 1500);
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const token = localStorage.getItem("accessToken");
  }, []);

  return (
    <LogInContext.Provider value={{ user, onLogOut, noAuth, onLogIn }}>
      {children}
    </LogInContext.Provider>
  );
}
