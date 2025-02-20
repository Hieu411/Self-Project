import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer/> */}
    </>
  );
}

export default App;
