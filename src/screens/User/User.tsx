import React, {useEffect, useState} from 'react';
import {Button, FlatList, Pressable, Text, View} from 'react-native';
import realm from '../../db/realm';

export const User: React.FC = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const users = realm.objects('User');
    users.addListener(() => {
      setUsers([...users]);
    });
    return () => {
      if(realm) {
        realm.close();
      }
    }
  }, []);
  const addUser = () => {
    realm.write(() => {
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        name: 'new user',
        age: 25,
      };
      realm.create('User', newUser);
    })
  }
  const deleteUser = (id) => {
    realm.write(() => {
      const user = realm.objects('User').filtered(`id = ${id}`)[0];
      realm.delete(user);
    })
  }
  const renderItem = ({item}: any) => {
    return (
      <View style={{padding: 10}}>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
        <Button title="Delete" onPress={() => deleteUser(item.id)}></Button>
      </View>
    );
  };
  return (
    <>
      <Pressable onPress={addUser}>
        <Text>Add User</Text>
      </Pressable>
      <FlatList
        data={user}
        extraData={user}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderItem}
      />
    </>
  );
};
