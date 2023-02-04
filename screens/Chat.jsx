import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  return <GiftedChat messages={messages} />;
};

export default ChatScreen;
