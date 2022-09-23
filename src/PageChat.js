import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";

const PageChat = () => {

    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const inputRef = useRef(null);

    const textChange = (event) => {
        setText(event.target.value)
    };

    const authorChange = (event) => {
        setAuthor(event.target.value);
    };

    const giveLastId = (array) => {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    const addMessage = (event) => {
        event.preventDefault();
        if (text !== '' && author !== '') {
            const message = {
                'id': giveLastId(messageList),
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
                'id': giveLastId(messageList),
                'text': `${lastMessage.author} написал новое сообщение`,
                'author': 'Ваш любимый бот',
            }

            setTimeout(() => {
                setMessageList((arrayMessage) => [...arrayMessage, message]);
            }, 1500)
        }
    }, [messageList]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>

            <Box
                sx={{
                    marginBottom: '15px',
                    minHeight: '20vh',
                }}>

                {messageList.map(item => {
                    return (<div className="message-block__item" key={item.id}>
                        <p className="message-block__text">{item.text}</p>
                        <span className="message-block__author">{item.author}</span>
                    </div>);
                })}

            </Box>

            <Box
                component={'form'}
                onSubmit={addMessage}>

                <Typography component={'h4'}>Поле сообщения</Typography>

                <TextField
                    ref={inputRef}
                    autoFocus
                    label={'Введите сообщение'}
                    value={text}
                    variant={'standard'}
                    onChange={textChange}
                />

                <TextField
                    label={'Введите Ваше имя'}
                    value={author}
                    variant={'standard'}
                    onChange={authorChange}
                />

                <Button
                    variant={'contained'}
                    type={'submit'}
                >Отправить
                </Button>
            </Box>
        </Container>
    )
};

export default PageChat;