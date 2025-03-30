import { Header } from "./layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { CatalogPage, DonatePage, VideoPage } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
