import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"
import { Header } from "./component/header"


function App() {

  return (
    <div className="w-[100%] bg-black">
    <Header></Header>
    <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
