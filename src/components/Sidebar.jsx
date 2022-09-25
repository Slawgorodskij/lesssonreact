import React, {useState} from 'react';
import {Box, Button, List, TextField, Typography,} from "@mui/material";
import Chats from "./Chats";


const Sidebar = ({createNewChat, arrayChats, dropElemChats}) => {
    const nameField = 'Новый чат';
    const nameButton = 'Добавить';
    const [chatName, setChatName] = useState('');

    const chatNameChange = (event) => {
        setChatName(event.target.value);
    }

    const addChats = (event) => {
        event.preventDefault();
        const newChat = {
            'id': giveLastId(arrayChats),
            'name': chatName,
        }
        createNewChat(newChat);
        setChatName(() => '');
    }
    const giveLastId = (array) => {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    return (
        <>
            <Box
                sx={{
                    marginBottom: '2%',
                    height: '75%',
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

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                    {arrayChats.length ?
                        arrayChats.map(item =>
                            <Chats
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                dropElemChats={dropElemChats}/>) :
                        (<Chats name={"чатов нет"}/>)
                    }
                </List>
            </Box>

            <Box
                component={'form'}
                onSubmit={addChats}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '23%',
                    background: '#d8d8e0',
                    borderRadius: '15px',
                }}
            >
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>

                    <TextField
                        autoFocus
                        label={'Введите сообщение'}
                        value={chatName}
                        variant={'standard'}
                        onChange={chatNameChange}
                        sx={{marginBottom: '5px', width: '70%'}}
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

export default Sidebar;