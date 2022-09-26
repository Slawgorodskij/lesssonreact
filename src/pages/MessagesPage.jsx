import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import HeaderMessage from "../components/HeaderMessage";
import Sidebar from "../components/Sidebar";
import TextMessagePage from "./TextMessagePage";

const user = 'Человек';

const MessagesPage = () => {
    const {chatId} = useParams();
    let namePage = 'Разделы'
    const [arrayChats, setArrayChats] = useState([
        {
            'id': 111,
            'name': 'О музыке',
        },
        {
            'id': 112,
            'name': 'О семье',
        },
        {
            'id': 113,
            'name': 'О работе',
        },
        {
            'id': 114,
            'name': 'О здоровье',
        },
        {
            'id': 115,
            'name': 'О любви',
        },

    ]);

    if (chatId) {
        const positiveArr = arrayChats.filter((item) => {
            return +item.id === +chatId;
        });
        if (positiveArr.length) {
            namePage = positiveArr[0].name;
        }
    }

    const dropChats = (dataId) => {
        setArrayChats(arrayChats.filter(obj => obj.id !== dataId));
    }

    const createNewChat = (nameChat) => {
        setArrayChats([...arrayChats, nameChat]);
    }

    return (
        <>
            <HeaderMessage namePage={namePage}/>
            <Container
                position="fixed"
                maxWidth="false"
                sx={{
                    height: 'calc(100vh - 160px)',
                }}>
                <Grid
                    container
                    columnSpacing={{xs: 1, sm: 2,}}
                    sx={{height: '100%'}}
                >
                    <Grid
                        item
                        xs={4}
                        sx={{height: '100%'}}
                    >
                        <Sidebar
                            createNewChat={createNewChat}
                            arrayChats={arrayChats}
                            dropElemChats={dropChats}/>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        sx={{height: '100%'}}
                    >
                        <TextMessagePage user={user}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MessagesPage;