import { Suspense, lazy } from "react";

// const Navigation = lazy(() => import("../Navigation/Navigation"));
// const RoutesComponent = lazy(() => import("../Routes/RoutesComponent"));
import Navigation from "../Navigation/Navigation";
import RoutesComponent from "../Routes/RoutesComponent";
// const css = lazy("./App.css");

function App() {
  return (
    <div>
      <Navigation />
      <RoutesComponent />
    </div>
  );
}

export default App;
