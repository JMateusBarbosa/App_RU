import React from 'react';
import { StatusBar, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/stylesCodRecuperacao';
import { ImageBackground } from 'react-native';



export default function VerificacaoEmail() {
  // Define o comprimento, o nível de preenchimento e a espessura da barra de progresso
  const progressBarLength = 150; // comprimento da barra
  const progressBarThickness = 6; // espessura da barra
  const progress = 1; // porcentagem de preenchimento Somente valores entre 0 e 1

  // Calculo da largura com base no progresso
  const progressBarWidth = progress * progressBarLength;

  return (
    <View style={styles.container}>

      {/* Seta no canto superior esquerdo */}
      <TouchableOpacity onPress={() => { }}>
        {/* substituir o ícone da seta */}
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
        
        <Text style={styles.title}>Verifique seu email</Text>

        
        <Text style={styles.description}>
          Nós enviamos um código para o seu email: skdp*****9@uea.edu.br
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
