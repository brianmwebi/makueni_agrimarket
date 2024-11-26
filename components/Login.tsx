import React, { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "@/firebase/firebaseConfig";

const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful! Redirecting to home...");
      router.push("/"); // Redirect to the home page
    } catch (error: any) {
      const errorMessage =
        error.code === "auth/user-not-found"
          ? "No user found with this email."
          : error.code === "auth/wrong-password"
          ? "Incorrect password. Please try again."
          : "Failed to login. Please check your credentials.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="text-red-500 text-sm"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 text-white bg-green-600 rounded-lg ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-green-600 hover:underline font-semibold"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
