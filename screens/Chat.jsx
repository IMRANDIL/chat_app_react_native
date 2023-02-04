import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <GiftedChat />
    </SafeAreaView>
  );
};

export default ChatScreen;
