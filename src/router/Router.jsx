import { Route, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"

const Router = () => {
    return(
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<h1>Hola</h1>} />
                <Route path={'/destination'} element={<h1>Destination</h1>} />
            </Route>
        </Routes>
    )
}

export default Router