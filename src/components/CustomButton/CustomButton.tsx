import React from 'react';
import {Pressable, Text} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: any;
};

export const CustomButton = React.memo((props: CustomButtonProps) => {
  const {title, onPress} = props;
  console.log('Child Component rendered');
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
});
