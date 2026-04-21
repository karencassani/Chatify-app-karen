import { io } from 'socket.io-client';

// En Vite se usa import.meta.env.MODE para saber si es producción
const URL = import.meta.env.MODE === 'production' ? undefined : 'http://localhost:3000';

export const socket = io(URL, {
    auth: {
        serverOffset: 0,
        ackTimeout: 10000,
        retries: 3,
    },
    // Si usas ManageConnection con botones de on/off, 
    // podrías querer añadir autoConnect: false aquí
    autoConnect: false 
});