import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../app/layout'
import Root from '../app/root'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Root />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
