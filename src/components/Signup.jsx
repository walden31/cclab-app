import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser } = UserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUser(email, password);
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    };
    return (
        <div className="max-w-[700px] mx-auto my-16 p-4">
            <div>
                <h1 className="text-2xl font-bold py-2">
                    Sign in to your account
                </h1>
                <p className="py-2">
                    Already have an account?{"  "}
                    <Link to="/" className="underline">
                        Sign in.
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3"
                        type="email"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3"
                        type="password"
                    />
                </div>
                <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 text-white w-full p-4 my-2">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
