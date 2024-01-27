# Aplicación de Mensajeria ( Whatsapp clone)

Este proyecto lo desarrolle yo mismo, es de codigo abierto, y brindo tambien una documentación del paso a paso, podes encontrarlo en este Link --> [Documentación del Proyecto](Documentation.MD)

## Tecnologías
Las Tecnologías que utilice fueron las siguientes:
+ Next JS
+ Socket.io
+ Express
+ Tailwind
+ Node
+ Zegocloud
+ Multer (dependencie)
+ crypto

## Database
+ Prisma
+ Postgress

# Package Json
Aca dejo los package.json de la carpeta ``/client`` y ``/server`` :

#### Client
```javascript
{
  "name": "whatsapp-clone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "autoprefixer": "^10.4.14",
    "axios": "^1.4.0",
    "emoji-picker-react": "^4.4.9",
    "firebase": "^9.21.0",
    "next": "13.4.1",
    "postcss": "^8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.8.0",
    "react-image-file-resizer": "^0.4.8",
    "socket.io-client": "^4.6.1",
    "tailwindcss": "^3.3.2",
    "wavesurfer.js": "^6.6.3",
    "zego-express-engine-webrtc": "2.24.5"
  }
}

```

#### Server
```javascript
{
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "@prisma/client": "^4.14.0",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20",
    "prisma": "^4.14.0",
    "socket.io": "^4.6.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.8.4"
  }
}
```

# Despedida
Gracias por leer todo, espero que te llame la atencion este repositorio, regalame una estrella si te parece interesante, es mi aporte a la comunidad, podes clonar el proyecto sin problemas, es de codigo abierto.

Un saludo a todos, desde Argentina.