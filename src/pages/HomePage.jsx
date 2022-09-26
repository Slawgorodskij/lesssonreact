import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Header from "../components/Header";
import ButtonLink from "../components/ButtonLink";

const HomePage = () => {

    const title = 'Общение - надежный способ:';
    const nameLink = 'Войти';
    const addressLink = '/messages';
    const nameButtonLink = 'Тебя ждут';

    const [arrayOffering] = useState([
        {
            'id': 1,
            'text': 'найти новых друзей,'
        },
        {
            'id': 2,
            'text': 'узнать что-то новое,'
        },
        {
            'id': 3,
            'text': 'поделиться своими знаниями.'
        }]);

    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}
            />
            <Box
                sx={{
                    color: '#d5dde3',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant={"h1"}
                    fontSize={'2.5rem'}
                >
                    {title}
                </Typography>

                {arrayOffering.map(item =>
                    <Typography
                        variant={"h2"}
                        fontSize={'2rem'}
                        key={item.id}
                    >
                        {item.text}
                    </Typography>
                )}
            </Box>
            <ButtonLink
                to={'/messages'}
                setWidth={'30vw'}
                setHeight={'2.5em'}
            >
                {nameButtonLink}
            </ButtonLink>
        </>
    );
};

export default HomePage;