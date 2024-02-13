/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './telas/Perfil';          //nome da tela que sera carregada
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
