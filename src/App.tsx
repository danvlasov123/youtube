import { Header } from "./layout";
import { CatalogPage } from "./pages/catalog";
import { VideoPage } from "./pages/video";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="Root">
        <Header />
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
