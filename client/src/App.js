import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { Spinner } from "react-bootstrap";
import { fetchType } from "./http/goodsApi";

const App = observer(() => {
  const {user} = useContext(Context)
  const {goods} = useContext(Context)
  const [loading, setLoading] = useState(true)

  const check = async () => {
    try {
      user.setUser(true)
      user.setIsAuth(true)
    } catch (error) {
        console.error('Request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    check();
    fetchType().then(data => goods.setType(data))
  }, []);

  if(loading) {
    return <Spinner animation="grow"/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <AppRouter />
      </div>
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
