const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto w-11/12">
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {/* Brand Name */}
          <div className="mb-4 sm:mb-0">
            <a
              href="/"
              className="text-3xl font-bold text-white hover:text-primary"
            >
              My Blog
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-4 mb-4 sm:mb-0">
            <a
              href="/allBlogs"
              className="btn btn-outline btn-primary rounded-md px-4 py-2"
            >
              All Blogs
            </a>
            <a
              href="/about"
              className="btn btn-outline btn-primary rounded-md px-4 py-2"
            >
              About
            </a>
          </div>

          {/* Authentication Links */}
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2025 My Blog. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
