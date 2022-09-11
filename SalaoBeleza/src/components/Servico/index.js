import React from 'react';
import { Box, Text, Touchable, Cover, Title, Button } from '../../styles'

const servico = () => {
    return (
        <Touchable
            height="100px"
            hasPadding
            align="center"
            background="light">

            <Cover Image="https://i.pinimg.com/736x/fb/bd/8b/fbbd8b6e43a007b6f84c8ade1d1bc3d0.jpg" />
            <Box direction="column">
                <Text bold color="dark"> Corte de cabelo feminino </Text>
                <Text small color="dark"> R$ 45 • 30 mins</Text>
            </Box>

            <Box>
                <Button icon="clock-check-outline" background="sucess" mode="contained" textColor="light">
                    AGENDAR
                </Button>
            </Box>
        </Touchable>
    );
};

export default servico;