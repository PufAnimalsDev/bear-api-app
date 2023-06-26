import { Route, Routes } from "react-router-dom";
import { BeersPage } from "./Pages/BeersPage/BeersPage";

export const App = () => (
  <div className="App">
    <div className="main">
      <Routes>
        <Route path="/" element={<BeersPage />}>
          <Route path=":beerId" element={<BeersPage />} />
        </Route>
      </Routes>
    </div>
  </div>
);
