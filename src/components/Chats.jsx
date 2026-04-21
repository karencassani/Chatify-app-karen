import React, { useEffect, useState } from "react";
import { socket } from '../../socket';

const Chats = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    // Escuchamos el evento 'chat message' desde el servidor
    socket.on('chat message', (msg, serverOffset) => {
      console.log('Mensaje desde server:', msg);
      
      // Guardamos el offset en el socket para reconexiones (opcional según tu backend)
      socket.auth.serverOffset = serverOffset;
      
      // Actualizamos el estado agregando el nuevo mensaje al array
      setMessage((prev) => [...prev, msg]);
    });

    // Limpiamos el evento cuando el componente se desmonte
    return () => {
      socket.off('chat message');
    };
  }, []);

  return (
    <div className="chats-container">
      <h3>Mensajes</h3>
      <div className="messages-list">
        {messages.length === 0 ? (
          <p style={{ color: 'gray' }}>No hay mensajes aún...</p>
        ) : (
          messages.map((m, index) => (
            <p key={index} className="message-item">
              <strong>{m}</strong>
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Chats;