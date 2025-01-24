import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { useState } from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-gray-200 py-4">
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-white hover:text-primary"
        >
          My Blog
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-200 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent text-center md:text-left`}
        >
          <Link
            href="/"
            className="btn btn-outline btn-primary rounded-md px-4 py-2 block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/allBlogs"
            className="btn btn-outline btn-primary rounded-md px-4 py-2 block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            All Blogs
          </Link>
          <Link
            href="/profile"
            className="btn btn-outline btn-primary rounded-md px-4 py-2 block md:inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <Link
              prefetch={false}
              href="/api/auth/logout"
              className="btn btn-secondary rounded-md px-4 py-2"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                href="/api/auth/login"
                className="btn btn-primary rounded-md px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/api/auth/register"
                className="btn btn-secondary rounded-md px-4 py-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Authentication Buttons for Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {user ? (
              <Link
                prefetch={false}
                href="/api/auth/logout"
                className="btn btn-secondary w-full rounded-md px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  href="/api/auth/login"
                  className="btn btn-primary w-full rounded-md px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/api/auth/register"
                  className="btn btn-secondary w-full rounded-md px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
