import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import OneMessage from "../components/OneMessage";

const TextMessagePage = (user) => {
    const nameField = ' Поле сообщения';
    const nameButton = 'Отправить';
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const inputRef = useRef(null);

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
                'text': text,
                'author': user.user,
            }
            setMessageList( [...messageList, message]);
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
                setMessageList( [...messageList, message]);
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
                    background: '#d8d8e0',
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
                {messageList.map(item => <OneMessage key={item.id} id={item.id} text={item.text} author={item.author}/>)}
            </Box>
            <Box
                component={'form'}
                onSubmit={addMessage}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '23%',
                    background: '#d8d8e0',
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