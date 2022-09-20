import {useEffect, useState} from 'react';
import './App.css';
import Performance from "./Performance";
import Header from "./Header";

function App() {
    const slogan = 'тяжело в учении легко в бою';
    const title = 'Домашнее задание 2-го урока';
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const textChange = (event) => {
        setText(event.target.value)
    };

    const authorChange = (event) => {
        setAuthor(event.target.value);
    };

    const addMessage = (event) => {
        event.preventDefault();
        if (text !== '' && author !== '') {
            const message = {
                'text': text,
                'author': author,
            }

            setMessageList((arrayMessage) => [...arrayMessage, message]);
            setText(() => '');
            setAuthor(() => '');
        }
    }

    useEffect(() => {
        let lastMessage = messageList[messageList.length - 1];

        if (lastMessage && lastMessage.author !== 'Ваш любимый бот') {
            const message = {
                'text': `${lastMessage.author} написал новое сообщение`,
                'author': 'Ваш любимый бот',
            }

            setTimeout(() => {
                setMessageList((arrayMessage) => [...arrayMessage, message]);
            }, 1500)
        }
    }, [messageList]);

    return (
        <div className="App">
            <Header slogan={slogan}/>
            <Performance title={title}/>
            <div className="main container">
                <div className="message-block">
                    {messageList.map(item => {
                        return (<div className="message-block__item">
                            <p className="message-block__text">{item.text}</p>
                            <span className="message-block__author">{item.author}</span>
                        </div>);
                    })}
                </div>
                <form onSubmit={addMessage}>
                    <fieldset className="form-block">
                        <legend>Поле сообщения</legend>
                        <input
                            className="form-block__input"
                            type={'text'}
                            placeholder={'Введите сообщение'}
                            value={text}
                            onChange={textChange}/>

                        <input
                            className="form-block__input"
                            type={'text'}
                            placeholder={'Введите Ваше имя'}
                            value={author}
                            onChange={authorChange}/>

                        <input
                            className="form-block__input"
                            type={'submit'}
                            value={'Отправить'}/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default App;
