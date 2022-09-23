import './App.css';
import Performance from "./Performance";
import Header from "./Header";
import Page from "./Page";

function App() {
    const slogan = 'тяжело в учении легко в бою';
    const title = 'Домашнее задание 3-го урока';

    return (
            <div className="App">
                <Header slogan={slogan}/>
                <Performance title={title}/>
                <Page/>
            </div>
    )
}

export default App;
