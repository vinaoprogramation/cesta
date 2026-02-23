import React from "react";
import { Text, Image, Dimensions, StyleSheet, View } from "react-native"

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width

export default function Cesta(){
    return<>
        <Image source={topo} style={estilos.topo}/>

        <Text style={estilos.titulo}> Detalhes da cesta </Text>
        <Text style={estilos.nome}> Cesta de Verduras </Text>

        <View styles={estilos.fazenda}>
            <Text style={estilos.nomeFazenda}> Jenny Jack Farm </Text>
            <Image source={logo} style={estilos.imagemFazenda}/>

        </View>

        <Text style={estilos.descricao}>Uma cesta de produtos selecionados
                cuidadosamente da fazenda direto para sua cozinha.
        </Text>

        <Text style={estilos.preco}>R$ 40,00</Text>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578/ 768 * width,
    },
    titulo:{
        width: "100%",
        position:"absolute",
        textAlign:"center",
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        textAlign:'center'
    },
    nome:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign:'center'
    },
    fazenda:{
        flexDirection:'row',
        paddingVertical:12,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 16,
        textAlign:'center'
    },
    imagemFazenda:{
        width:32,
        height:32,
        margin:'auto',
    },
    descricao:{
        color:'#A3A3A3',
        fontSize: 16,
        lineHeight:26,
        width: width,
        textAlign:'center',
        padding: 10,
    },
    preco:{
        color:'#2A9F85',
        fontWeight:'bold',
        fontSize:26,
        lineHeight:42,
        marginTop:8,
        textAlign:'center',
    }

})
