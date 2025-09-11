import './App.css';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
