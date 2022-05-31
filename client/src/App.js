import "./App.css";
import { PUBLIC_ROUTER, PRIVATE_ROUTER } from "./router/router";
import ProtectRouter from "./router/ProtectRouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchUser } from "./redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { TOKEN_USER } from "./constant";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem(TOKEN_USER)) {
      dispatch(fetchUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {PUBLIC_ROUTER.map((publicRouter, index) => {
            const Comp = publicRouter.component;
            return (
              <Route
                key={index}
                path={publicRouter.path}
                element={<Comp />}
              ></Route>
            );
          })}

          {PRIVATE_ROUTER.map((privateRouter, index) => {
            const Comp = privateRouter.component;
            return (
              <Route
                key={index}
                path={privateRouter.path}
                element={
                  <ProtectRouter>
                    <Comp />
                  </ProtectRouter>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
