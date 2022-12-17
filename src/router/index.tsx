import { createBrowserRouter } from "react-router-dom";
import Editor from "../pages/Editor";
export const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Editor />,
  },
]);
