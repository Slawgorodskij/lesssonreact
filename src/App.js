import Performance from "./Performance";
import Header from "./Header";

function App() {
    const slogan = 'тяжело в учении легко в бою';
    const title = 'Домашнее задание 1-го урока';
  return (
    <div className="App">
        <Header slogan={slogan} />
        <Performance title={title} />
    </div>
  );
}

export default App;
