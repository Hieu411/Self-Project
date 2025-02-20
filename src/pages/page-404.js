import "../input.css";
import errorGift from "../assets/images/404-lottie.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Page404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-serif text-center">
      <div className="w-full max-w-2xl">
        <div className="h-96 flex items-center justify-center">
          <DotLottieReact src={errorGift} loop autoplay />
        </div>

        {/* Error Message */}
        <div className="-mt-12">
          <h3 className="text-2xl font-medium text-indigo-400 mt-2">
            Page Not Found
          </h3>
        </div>

        {/* Link to Navigate Back */}
        <a
          href="/"
          className="mt-8 inline-block px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Page404;
