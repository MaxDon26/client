import "normalize.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";
import { UpBtn } from "./components/common/UpBtn";
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Edit } from "./layouts/edit";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <AuthProvider>
          <ToastContainer />
          <Routes>
            <Route index path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/:id?" element={<Main />} />
              <Route path="/settings" element={<Edit />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Wrapper>
      <UpBtn />
    </div>
  );
}

export default App;
