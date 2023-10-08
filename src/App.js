import "./App.css";
import { Route, Routes } from "react-router-dom";
import ImageLanding from "./pages/imageUploads/ImageLanding";
import ImageView from "./pages/imageUploads/ImageView";

function App() {
  const RouteConfig = [
    {
      name: "/",
      path: "/",
      element: <ImageLanding />,
      exact: true,
    },
    {
      name: "image-view",
      path: "/image/:id",
      element: <ImageView />,
      exact: true,
    },
  ];
  return (
    <div className="App">
      <Routes>
        {RouteConfig.map(({ name, path, exact, element }) => (
          <Route key={name} path={path} exact={exact} element={element} />
        ))}

        <Route path="*" exact element={<ImageLanding />} />
      </Routes>
    </div>
  );
}

export default App;
