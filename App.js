import { StatusBar } from 'expo-status-bar';
import {  Text, TouchableOpacity, SafeAreaView, Modal, View, FlatList} from 'react-native';
import { styles } from './styles/style';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from './services/i18next';
import { useState } from 'react';
import languagesList from './services/languageList.json';


export default function App() {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languagesList}>
          <FlatList
            data={Object.keys(languageResources)}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => changeLng(item)}>
                <Text style={styles.lngName}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={styles.text}>{t('welcome')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

