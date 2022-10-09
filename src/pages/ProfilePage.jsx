import React from 'react';
import Header from "../components/Header";
import ButtonLink from "../components/ui/ButtonLink";

const ProfilePage = () => {
    const nameLink = 'Выйти';
    const addressLink = '/';
    const nameButtonLink = 'Вернуться на страницу сообщений';

    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}
            />
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

export default ProfilePage;