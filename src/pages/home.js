import "../input.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-indigo-500 text-center">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Explore the latest updates, features, and resources. We’re here to
          help you make the most of your experience.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/error404"
            className="px-6 py-3 text-white bg-indigo-500 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 bg-indigo-50 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l7-7m0 0l7 7M10 3v11m11 11l-7-7m0 0l-7 7m7-7v11"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-indigo-500">
              Fast Performance
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Optimized for speed and performance.
            </p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-indigo-50 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5l7.5 7.5m0 0l-7.5 7.5m7.5-7.5H4"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-indigo-500">
              Easy Navigation
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Simple and user-friendly interface.
            </p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-indigo-50 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-indigo-500">
              Powerful Features
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Packed with tools to enhance productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
