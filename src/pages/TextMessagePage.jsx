import React, {useEffect, useRef, useState, useContext} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import OneMessage from "../components/OneMessage";
import {ThemeContext} from "../context";

const TextMessagePage = ({user}) => {
    const {chatId} = useParams();
    const nameField = 'Поле сообщения';
    const nameButton = 'Отправить';
    const [messageList, setMessageList] = useState([
        {
            'id': 1,
            'arrayChatsId': 111,
            'text': 'много слов о музыке',
            'author': 'Степан',
        },
        {
            'id': 2,
            'arrayChatsId': 111,
            'text': 'ещё много слов о музыке',
            'author': 'Николай',
        },
        {
            'id': 3,
            'arrayChatsId': 111,
            'text': 'и снова слова о музыке',
            'author': 'Иван',
        },
        {
            'id': 4,
            'arrayChatsId': 111,
            'text': 'просто песня',
            'author': 'Степан',
        },
        {
            'id': 5,
            'arrayChatsId': 112,
            'text': 'Семья',
            'author': 'Николай',
        },
        {
            'id': 6,
            'arrayChatsId': 112,
            'text': 'Снова семья',
            'author': 'Иван',
        },
        {
            'id': 7,
            'arrayChatsId': 112,
            'text': 'Конечно семья',
            'author': 'Степан',
        },
        {
            'id': 8,
            'arrayChatsId': 114,
            'text': 'Побежали за здоровьем',
            'author': 'Николай',
        },
        {
            'id': 9,
            'arrayChatsId': 114,
            'text': 'побежали',
            'author': 'Иван',
        },
        {
            'id': 10,
            'arrayChatsId': 114,
            'text': 'С песней',
            'author': 'Степан',
        },
        {
            'id': 11,
            'arrayChatsId': 114,
            'text': 'И семьёй',
            'author': 'Николай',
        },
        {
            'id': 12,
            'arrayChatsId': 114,
            'text': 'Вперед',
            'author': 'Иван',
        },

    ]);
    const [showMessageList, setShowMessageList] = useState([]);
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const [idChat, setIdChat] = useState('')
    const {themes} = useContext(ThemeContext)

    const addShowMessage = (id) => {
        setShowMessageList(messageList.filter(obj => obj.arrayChatsId === id))
    }

    const dropShowMessage = (id) => {
        setShowMessageList(messageList.filter(obj => obj.arrayChatsId !== id))
    }
    if (chatId && +chatId !== +idChat) {
        dropShowMessage(idChat)
        setIdChat(chatId);
        addShowMessage(+chatId)
    }


    const textChange = (event) => {
        setText(event.target.value);
    };

    const giveLastId = (array) => {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    const addMessage = (event) => {
        event.preventDefault();
        if (text !== '') {
            const message = {
                'id': giveLastId(messageList),
                'arrayChatsId': idChat,
                'text': text,
                'author': user,
            }
            setMessageList([...messageList, message]);
            setShowMessageList([...showMessageList, message])
            setText(() => '');

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
                setMessageList([...messageList, message]);
            }, 1500)
        }
    }, [messageList]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <Box
                sx={{
                    marginBottom: '2%',
                    padding: '5px',
                    height: '73%',
                    background: themes.background,
                    borderRadius: '15px',
                    overflowY: 'scroll',
                    "&::-webkit-scrollbar": {
                        width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#8c8c95"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#244e4d",
                        borderRadius: 2
                    }
                }}>
                {showMessageList.map(item => <OneMessage key={item.id} id={item.id} text={item.text}
                                                         author={item.author}/>)}
            </Box>
            <Box
                component={'form'}
                onSubmit={addMessage}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '23%',
                    background: themes.background,
                    borderRadius: '15px',
                }}>
                <Typography
                    component={'h4'}
                    textAlign={'center'}
                >
                    {nameField}
                </Typography>
                <Box
                    sx={{
                        padding: '0 1em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>

                    <TextField
                        ref={inputRef}
                        autoFocus
                        label={'Введите сообщение'}
                        value={text}
                        variant={'standard'}
                        multiline
                        maxRows={4}
                        onChange={textChange}
                        sx={{width: '70%'}}
                    />

                    <Button
                        variant={'contained'}
                        type={'submit'}
                    >
                        {nameButton}
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default TextMessagePage;