import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRoutes from "./MyRoutes";
import MyContextProvider from "./Context/MyContextProvider";
import Toastify from "./Toastify";

function App() {
  return (
    <MyContextProvider>
      <Toastify />
      <MyRoutes />
    </MyContextProvider>
  );
}

export default App;
