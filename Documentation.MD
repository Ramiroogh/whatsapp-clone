# Paso 1: Configurar Firebase
Crear un proyecto en firebase.

Luego debemos copiar el codigo para inicializar desde el cliente de nuestra aplicacion, nos dirijimos a:

```
    └── src
        └── utils
              └── FirebaseConfiguration.js
```

En este archivo pegamos la configuracion de nuestro proyecto, y luego creamos una variable para permitir la autenticacion de nuestra aplicacion, pasandole como argumento, a nuestra misma aplicacion inicializada:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxxxxxxxx",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxxxxx",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxxxx",
  measurementId: "xxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth with Firebase
export const firebaseAuth = getAuth(app)
```

# Paso 2: Configurar Prisma
Nos posicionamos en la carpeta server, y ejecutamos `npx prisma init`.

Esto es rutinario, nos creo la carpeta prisma, y dentro un archivo llamado *schema.prisma*. y tambien nos crea un archivo .env para incluir una variable de ejemplo, en el cual debemos introducir la url de nuestra conexion a la DB.

### Configurar la URL del .env

Agregaremos la configuracion de que sea administrador, y ademas, vamos a agregarle el nombre que tendra nuestra base de datos, que en este caso sera, whatsapp:
`DATABASE_URL="postgresql://postgress:admin@localhost:5432/whatsapp?schema=public"`.
