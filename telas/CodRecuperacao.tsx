import React from 'react';
import { StatusBar, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/stylesCodRecuperacao';
import { ImageBackground } from 'react-native';

export default function CodRecuperacao() {
     // Define o comprimento, o nível de preenchimento e a espessura da barra de progresso
  const progressBarLength = 150; // comprimento da barra
  const progressBarThickness = 6; // espessura da barra
  const progress = 0.8; // porcentagem de preenchimento Somente valores entre 0 e 1

  // Calculo da largura com base no progresso
  const progressBarWidth = progress * progressBarLength;

  return (
    <View style={styles.container}>      
      
      {/* Seta no canto superior esquerdo */}
      <TouchableOpacity onPress={() => { }}>
        {/* Substituir o ícone da seta*/}
        <ImageBackground  
          source={require('./assets/img/R.png')} 
          style={{width: 25, height: 25}}
      />
      </TouchableOpacity>

      {/* Barra de progresso */}
      <View style={[styles.progressBarContainer, { width: progressBarLength, height: progressBarThickness }]}>
        <View style={[styles.progressBar, { width: progressBarWidth }]}></View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Código de recuperação de Senha</Text>
        <Text style={styles.description}>
          Nós enviamos um código de recuperação de senha de 4 dígitos para o seu e-mail. Digite o código para prosseguir.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>

      <Text style={styles.resendCode}>
        Não recebeu o código?{' '}
        <Text style={{ color: 'blue' }}>Reenviar</Text>
      </Text>

      <TouchableOpacity style={styles.validateButton} onPress={() => { /* Adicione a lógica de validação */ }}>
        <Text style={styles.validateButtonText}>Validar</Text>
      </TouchableOpacity>
    </View>
  );
}
