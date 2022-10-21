import "./App.css";
import AuthContextPovider from "./contexts/AuthContext";
import AppRouter from "./router/AppRouter";
import {ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <AuthContextPovider>
       <AppRouter />
       <ToastContainer />
    </AuthContextPovider>
      

     
    </>
  );
}

export default App;
