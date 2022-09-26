import React from 'react';
import {Box, Typography} from "@mui/material";
import ButtonLink from "./ButtonLink";


const Header = ({namePage}) => {
    const logo = 'Наш чат';
    const linkProfile = 'Профиль';
    const linkExit = 'Выход';

    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                fontSize={'2rem'}
                color={'#a74826'}
            >
                {logo}
            </Typography>
            <Typography
                fontSize={'1.5rem'}
                color={'#a74826'}
            >
                {namePage}
            </Typography>
            <Box sx={{display: 'flex'}}>
                <ButtonLink to={'/profile'}
                            setWidth={'10vw'}
                            setHeight={'2.5em'}
                            mr={'5px'}
                >
                    {linkProfile}
                </ButtonLink>
                <ButtonLink
                    to={'/'}
                    setWidth={'10vw'}
                    setHeight={'2.5em'}
                >
                    {linkExit}
                </ButtonLink>
            </Box>
        </Box>
    );
};

export default Header;