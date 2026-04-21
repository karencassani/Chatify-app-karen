import React, { useEffect, useState } from "react";
import { socket } from '../socket'; // <--- VERIFICA ESTA RUTA

const Chats = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg, serverOffset) => {
      console.log('Mensaje desde server:', msg);
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  return (
    <div>
      <h1>Chats</h1>
      {messages?.map((m, index) => (
        <p key={index}>{m}</p>
      ))}
    </div>
  );
};

export default Chats;