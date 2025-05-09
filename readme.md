# MicroAuth - Registro de Usuarios

MicroAuth es un microservicio de autenticación que maneja el **registro de usuarios**. Este servicio permite registrar usuarios proporcionando un **nombre de usuario**, **correo electrónico** y **contraseña**.

## Características

- Registra nuevos usuarios con nombre de usuario, correo electrónico y contraseña.
- La contraseña se almacena de manera segura utilizando **hashing** (bcrypt).
- Verifica que no existan **nombres de usuario** ni **correos electrónicos** duplicados.
- Responde con un mensaje de éxito o error según corresponda.

## Endpoints

### 1. **POST /register**

- **Descripción**: Registra un nuevo usuario.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
    "username": "nombre_de_usuario",
    "email": "correo@ejemplo.com",
    "password": "contraseña_segura"
  }

## Entendiendo las respuestas

### Respuesta exitosa (201)

Si el usuario se registra correctamente, la respuesta será:

```json
{
  "username": "nombre_de_usuario",
  "email": "correo@ejemplo.com",
  "password": "contraseña_segura"
}

### Respuestas de Error (400)

Si ya hay un usuario con ese correo:
```json
{
  "message": "Email already exists"
}

Si ya hay un usuario con ese username:
```json
{
  "message": "Username already exists"
}

## Instrucciones de instalación
1. Clonar el repositorio
`git clone https://github.com/DexAlv/microAuth.git`
2. Navegar al proyecto.
`cd microAuth`
3. Instalar dependencias.
`npm install`
4. Modificar el archivo [.env.example] con tus credenciales.
5. Iniciar el servidor.
`npm start`

## Notas
Actualmente microAuth solo maneja el registro de usuarios. En el futuro se tiene planeado agregar un microservicio de login y autenticación de sesiones.