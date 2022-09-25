import React from 'react';
import {Box, Typography} from "@mui/material";
import ButtonLink from "./ButtonLink";

const logo = 'Наш чат'
const Header = ({addressLink, nameLink}) => {

    return (
        <Box
        sx={{
            width: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
        >
            <Typography fontSize={'2rem'} color={'#a74826'}>{logo}</Typography>
            <ButtonLink to={addressLink} setWidth={'10vw'} setHeight={'2.5em'} > {nameLink} </ButtonLink>
        </Box>
    );
};

export default Header;