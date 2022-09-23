import React, {useState} from 'react';
import {
    Box,
    Container,
    List,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PageChat from "./PageChat";
import {orange} from "@mui/material/colors";

const theme = createTheme({
    status: {
        backgroundLight: orange[300],
        backgroundDark: orange[500],
    },
});

const Page = () => {

    const [arrayChats] = useState([
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

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="false"
                sx={{
                    display: 'flex',
                    bgcolor: theme.status.backgroundLight,
                    minHeight: '50vh'
                }}>

                <Box
                    sx={{
                        padding: '20px',
                        width: '25vw',
                        height: '100%',
                        bgcolor: theme.status.backgroundDark,
                    }}>

                    <List
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>

                        {arrayChats.map(item =>
                            <ListItemIcon key={item.id}>
                                <InboxIcon/>
                                <ListItemText primary={item.name}/>
                            </ListItemIcon>
                        )}

                    </List>
                </Box>
                <PageChat/>
            </Container>
        </ThemeProvider>
    );
};

export default Page;