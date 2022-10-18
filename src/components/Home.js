import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h3>This is a home {user?.displayName}</h3>
        </div>
    );
};

export default Home;