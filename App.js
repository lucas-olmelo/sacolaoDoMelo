import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Cesta from './src/screens/Cesta';

export default function App() {
  
  //Fonte utilizada para o projeto
  const [ fonteCarregada ] = useFonts({
    'MontserratRegular' : Montserrat_400Regular, 
    'MontserratBold' : Montserrat_700Bold
  })
  
  //Checa se as fontes já foram carregadas antes de abrir o app
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <Cesta/>
      <StatusBar/>
    </SafeAreaView>
  );
}
