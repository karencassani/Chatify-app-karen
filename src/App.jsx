import { useEffect } from 'react'
import './App.css'
import { socket } from './socket';
import ManageConnection from './components/ManageConnection';
import MyForm from './components/MyForm';
import Channels from './components/Channels'
import Users from './components/Users'
import Chats from './components/Chats'

function App() {
  useEffect(() => {
    const onConnect = () => {
      console.log('Conectado al servidor de Chatify');
    }

    const onDisconnect = () => {
      console.log('Desconectado del servidor');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    }
  }, []);

  // EL RETURN DEBE ESTAR AQUÍ ADENTRO, NO EN LA LÍNEA 1
  return (
    <div className='app-container'>
      <header className='chat-header'>
          <h1>Chatify</h1>
          <ManageConnection/>
      </header>

      <div className='flex flex-row gap-4'>
          <aside className='sidebar'>
            <h2>Channels</h2>
            <Channels/>
          </aside>

          <main className='chat-main'>
            <section className='message-area'>
              <Chats/>
            </section>
            <footer className='footer-form'>
              <MyForm/>
            </footer>
          </main>

          <aside className='sidebar'>
            <h2>Users</h2>
            <Users/>
          </aside>
      </div>
    </div>
  );
}

export default App;