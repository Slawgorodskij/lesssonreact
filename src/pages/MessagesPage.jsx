import React from 'react';
import {useParams} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import HeaderMessage from "../components/HeaderMessage";
import Sidebar from "../components/Sidebar";
import TextMessagePage from "./TextMessagePage";
import {useSelector} from "react-redux";

const user = 'Человек';

const MessagesPage = () => {
    const {chatId} = useParams();
    let namePage = 'Разделы'
    const nameChat = useSelector(state => state.chats.nameChat);

    if (chatId) {
        const positiveArr = nameChat.filter((item) => {
            return +item.id === +chatId;
        });
        if (positiveArr.length) {
            namePage = positiveArr[0].name;
        }
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
                        <Sidebar nameChat={nameChat}/>
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