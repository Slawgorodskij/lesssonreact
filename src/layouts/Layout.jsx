import React from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from "@mui/material";
import Footer from "../components/Footer";

const Layout = () => {

    return (
        <Container
            maxWidth="false"
            sx={{
                padding: '5px',
                height: '100vh',
                background: 'linear-gradient(145deg, #1a5251 45%, #529898 90%)',
            }}
        >
            <Container
                sx={{
                    padding: '5px',
                    height: 'calc(100vh - 10px)',
                    borderRadius: '30px',
                    background: '#d8d8e0',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '5px',
                        height: 'calc(100vh - 20px)',
                        borderRadius: '30px',
                        background: 'linear-gradient(180deg, #244e4d 40%, #529898 90%)',
                    }}
                >
                    <Outlet/>

                    <Footer/>

                </Container>
            </Container>
        </Container>
    );

};

export default Layout;