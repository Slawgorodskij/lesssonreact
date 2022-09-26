import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'/messages'} element={<MessagesPage/>}/>
                    <Route path={'/messages/:chatId'} element={<MessagesPage/>}/>
                    <Route path={'/noChat'} element={<Page404/>}/>
                    <Route path={'*'} element={<Page404/>}/>
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
