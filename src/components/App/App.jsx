import { Suspense, lazy } from "react";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const RoutesComponent = lazy(() => import("../Routes/RoutesComponent"));
const css = lazy("./App.css");

function App() {
  return (
    <Suspense fallback={"wait.... for it"}>
      <Navigation />
      <RoutesComponent />
    </Suspense>
  );
}

export default App;
