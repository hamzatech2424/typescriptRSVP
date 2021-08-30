import React, {useState} from 'react';
import {View, Text, Modal,TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Header} from '../Components/Module Components';
import {
  AbstractTextInput,
  ContentContainer,
  AbstractRadio,
  AbstractImageUploadBox,
  AbstractTextOverline,
  AbstractButton,
} from '../Components/Abstract Components';
import {ModalCompo} from '../Components/Module Components';
import {Colors} from '../theme/color';
import { navigate } from '../Navigation/AuthStack'; 




const LoginScreen:React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [modalVisible,setmodalVisible] = useState<boolean>(false)

  // console.log(email,password);

  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <Header text={'Bienvenido de vuelta'} />

      <ContentContainer
        style={{
          height: '67%',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '100%', justifyContent: 'space-between'}}>
          <AbstractTextInput
            style={{marginTop: 20}}
            label={'Email'}
            value={email}
            setvalue={txt => setEmail(txt)}
          />

          <AbstractTextInput
            secureText
            style={{marginTop: 25}}
            label={'Password'}
            value={password}
            setvalue={txt => setPassword(txt)}
          />


         {modalVisible?

           <ModalCompo
            isVisible={modalVisible}
             setModalVisiblity={() => { setmodalVisible(preState => preState = !preState) }} />

           : null}   

          <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>setmodalVisible(true)}
            style={styles.lsblueTextView}
            >
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: '#2050D5',
              }}>
              Olvide mi contrasena
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lsButtonOuterView}>
          <AbstractButton txt={'acceder'} width={'90%'} height={55} />

          <AbstractTextOverline text={'No tienes una cuenta?'} />

          <AbstractButton
            txt={'REGISTRATE'}
            btnStyle={'transparent2'}
            width={'90%'}
            height={55}
            onPressIn={()=>navigate('RegisterPage')}
          />
        </View>
      </ContentContainer>
    </View>
  );
};

export default LoginScreen;
