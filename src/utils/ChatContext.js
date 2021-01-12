import { createContext, useState } from "react";
export const ChatContext = createContext();

export const ChatProvider = (props) => {
  const [chats, setChats] = useState({
    "1a": [
      {
        id: "1",
        message: "Remember to buy milk",
        date: new Date(2018, 4, 11),
        userId: "1",
      },
      {
        id: "2",
        message: "The milk got it",
        date: new Date(2018, 4, 11),
        userId: "admin",
      },
      {
        id: "3",
        message: "cow milk is best",
        date: new Date(2018, 4, 11),
        userId: "1",
      },
      {
        id: "4",
        message: "milk is expired",
        date: new Date(2018, 4, 11),
        userId: "1",
      },

      {
        id: "5",
        message: "Remember to buy book",
        date: new Date(2018, 4, 11),
        userId: "admin",
      },
      {
        id: "6",
        message: "book is knowledge",
        date: new Date(2018, 4, 11),
        userId: "1",
      },
      {
        id: "7",
        message: "Code book are best",
        date: new Date(2018, 4, 11),
        userId: "admin",
      },
    ],
  });

  return (
    <ChatContext.Provider value={[chats, setChats]}>
      {props.children}
    </ChatContext.Provider>
  );
};
