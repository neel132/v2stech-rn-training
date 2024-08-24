import React, {useCallback, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {CustomButton} from '../../components';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

export const Home: React.FC = () => {
  const {t} = useTranslation();
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  const changeLanguageSetting = (lng: string) => {
    i18next.changeLanguage(lng);
  };
  console.log('count state -', count);
  return (
    <View>
      <Text>{t('hello')}</Text>
      <Text>Count: {count}</Text>
      <CustomButton title="Press me" onPress={onIncrement} />
      <Pressable onPress={() => changeLanguageSetting('fr')}>
        <Text>Change language settings</Text>
      </Pressable>
    </View>
  );
};
