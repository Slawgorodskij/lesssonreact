import React, {useEffect, useRef, useState, useContext} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import OneMessage from "../components/OneMessage";
import {ThemeContext} from "../context";
import {useSelector} from "react-redux";
import {useMessages} from "../store/useMessages";

const nameField = 'Поле сообщения';
const nameButton = 'Отправить';

const TextMessagePage = ({user}) => {
    const {chatId} = useParams();
    const inputRef = useRef(null);
    const {themes} = useContext(ThemeContext);
    const messages = useSelector(state => state.messages.messages);
    const {addMessagesAction} = useMessages();
    const [text, setText] = useState('');
    const [idChat, setIdChat] = useState('')

    const [showMessageList, setShowMessageList] = useState([]);

    const addShowMessage = (id) => {
        setShowMessageList(messages.filter(obj => obj.arrayChatsId === id))
    }

    const dropShowMessage = (id) => {
        setShowMessageList(messages.filter(obj => obj.arrayChatsId !== id))
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
                'id': giveLastId(messages),
                'arrayChatsId': idChat,
                'text': text,
                'author': user,
            }
            addMessagesAction(message);
            setShowMessageList([...showMessageList, message])
            setText(() => '');

        }
    }

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
                    overflowY: 'auto',
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