import React from 'react';
import { FlatList, Text } from 'react-native';
import Header from '../../components/Header';
import theme from '../../styles/theme.json';
import util from '../../util';

import Servico from '../../components/Servico';
import Header from '../../components/Header';

const Home = () => {
    return (
        <FlatList
            style={{
                backgroundColor: util.toAlpha(theme.colors.muted, 10)
            }}
            ListHeaderComponent={Header}
            data={['a', 'b', 'c', 'd', 'e']}
            renderItem={({ item }) => (<Servico key="{item}" />)}
            keyExtractor={(item) => item}
        />
    );
};

export default Home;