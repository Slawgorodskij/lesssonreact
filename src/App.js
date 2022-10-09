import {Routes, Route} from 'react-router-dom'
import ProfilePage from "./pages/ProfilePage";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404";
import MessagesPageContainer from "./pages/messagePage/MessgePageContainer";
import HomePageContainer from "./pages/homePage/HomePageContainer";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePageContainer/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'/messages'} element={<MessagesPageContainer/>}/>
                    <Route path={'/messages/:chatId'} element={<MessagesPageContainer/>}/>
                    <Route path={'/noChat'} element={<Page404/>}/>
                    <Route path={'*'} element={<Page404/>}/>
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
