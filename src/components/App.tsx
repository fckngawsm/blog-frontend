import Container from "@mui/material/Container";

import { Header } from "./Header/index";
import { Home, FullPost, Registration, AddPost, Login } from "../pages/index";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../redux-hooks";
import { useEffect } from "react";
import { checkAuth } from "../features/auth/auth-slice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (jwt) {
      dispatch(checkAuth(jwt));
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
