import Container from "@mui/material/Container";

import { Header } from "./Header/index";
import { Home, FullPost, Registration, AddPost, Login } from "../pages/index";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
}

export default App;
