import './App.css';
import Performance from "./Performance";
import Header from "./Header";

function App() {
    const slogan = 'тяжело в учении легко в бою';
    const title = 'Домашнее задание 1-го урока';
  return (
    <div className="App">
        <Header slogan={slogan} />
        <Performance title={title} />
        <div className="main container">

            <figure className="main__image-block">
                <img className="main__image" src="/images/2022-09-13_20-00-44.png" alt="скриншот экрана с отображением работающего расширения React Devtools"/>
                <figcaption className="main__text">
                    <p>Запустил расширение</p>
                </figcaption>
            </figure>

        </div>
    </div>
  );
}

export default App;
