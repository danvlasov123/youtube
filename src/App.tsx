import { Header } from "./layout";
import { VideoPage } from "./pages/video";

export const App = () => {
  return (
    <div className="Root">
      <Header />
      <VideoPage />
    </div>
  );
};
