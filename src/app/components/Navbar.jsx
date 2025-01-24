import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            href="/"
            className="btn btn-outline btn-primary rounded-md px-4 py-2"
          >
            Home
          </Link>
          <Link
            href="/allBlogs"
            className="btn btn-outline btn-primary rounded-md px-4 py-2"
          >
            All Blogs
          </Link>
          <Link
            href="/profile"
            className="btn btn-outline btn-primary rounded-md px-4 py-2"
          >
            Profile
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="flex space-x-4">
          {user ? (
            <>
              <Link
                href="/api/auth/logout"
                className="btn btn-secondary rounded-md px-4 py-2"
              >
                Logout
              </Link>
            </>
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
      </nav>
    </div>
  );
};

export default Navbar;
