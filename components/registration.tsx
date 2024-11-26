import React, { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "@/firebase/firebaseConfig"; // Adjust the import path to your firebaseConfig file

const auth = getAuth(firebaseApp);

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful! Redirecting to login...");
      router.push("/login"); // Redirect to the login page
    } catch (error: any) {
      const errorMessage =
        error.code === "auth/email-already-in-use"
          ? "This email is already in use. Please use another one."
          : error.code === "auth/invalid-email"
          ? "Invalid email address format."
          : "Failed to register. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Register for Makueni AgriMarket
        </h2>
        <form onSubmit={handleRegistration} className="space-y-4">
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
              minLength={6}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Confirm your password"
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
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-600 hover:underline font-semibold"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
