"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function UserProfile() {
  const [user, setUser] = useState("nothing");
  const router = useRouter();
  const logout = async () => {
    try {
      const respose = await axios.get("/api/users/logout");
      console.log("Logout successful", respose.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setUser(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen py-2">
      <h1 className="text-2xl">Hello Profile page</h1>
      <hr />
      <h2>
        {user === "nothing" ? (
          "Nothing"
        ) : (
          <Link className="hover: hover:bg-cyan-300" href={`/profile/${user}`}>
            {user}
          </Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-yellow-500 mt-4 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        get user datails
      </button>
    </div>
  );
}
