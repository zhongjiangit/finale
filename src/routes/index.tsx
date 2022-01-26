import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, NotFound, Layout } from "components";
import routerArray from "./components"
import Home from "pages/home"

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/layout' element={<Layout />} >
          {routerArray.map((router)=>(
            <Route key={router.path} path={router.path} element={router.component()} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;