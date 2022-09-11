import React from 'react';
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { Cover, GradientView, Title, text, Badge, Box, Touchable, Button, TextInput } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../styles/theme.json';


const Header = () => {
    //return (<Text>Header</Text>)
    return (
        <>
        <Cover image="https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2020/06/14173126/marketing-digital-para-salao-de-beleza-header.jpg"
            width="100%"
            height="300px">
            <GradientView
                colors={['#21232F33', '#21232FE6']}
                hasPadding
                justify="flex-end"
            >
                <Badge color="sucess"> ABERTO </Badge>
                <Title color="light"> Salão de Beleza</Title>
                <Text color="light"> Salão de Beleza • 5.2kms</Text>
            </GradientView>
            </Cover>);
            <Box background="light" align="center" width={Dimensions.get('window').width}>
                <Box justify="space-between" hasPadding>
                    <Touchable
                        direction="column" align="center" width="50px">
                        <Icon name="phone" size={24} color={ theme.colors.muted} />
                        <Text small spacing="10px 0 0"> Ligar </Text>
                    </Touchable>

                    <Touchable
                        direction="column" align="center" width="50px">
                        <Icon name="map-marker" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0"> Visitar </Text>
                    </Touchable>

                    <Touchable
                        direction="column" align="center" width="50px">
                        <Icon name="share" size={24} color={theme.colors.muted} />
                        <Text small spacing="10px 0 0"> Enviar </Text>
                    </Touchable>
                    <Box hasPadding="column" align="center" justify="center">
                        <Button icon="clock-check-outline" background="sucess" mode="contained" uppercase={false} > Agendar Agora </Button>
                        <Text small spacing="10px 0 0">
                            Horarios disponiveis
                        </Text>
                </Box>
                </Box>
            </Box>
            <Box hasPadding direction="column" background="light" spacing="10px 0 0">
                <Title small>Serviços (2)</Title>
                <TextInput placeholder="Digite o nome do serviço" />
            </Box>
        </>
   );
};

export default Header;