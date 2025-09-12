# 🐘 Elephant – Red Social para Mayores de 60 años

**Elephant** es una red social desarrollada con **React, Redux y SASS** que permite a los usuarios registrarse, iniciar sesión, publicar contenido, interactuar con otros mediante likes y comentarios, y gestionar su propio perfil.

Este proyecto está construido sobre la **API del backend** desarrollada en el segundo proyecto (repositorio aquí 👉 [https://github.com/SantiagoOH21/PROYECTO2_SocialMedia](#)), integrando todo lo aprendido hasta ahora en frontend y buenas prácticas de desarrollo.

---

## 🚀 Características principales

- 🔑 **Autenticación de usuarios** (registro, login y logout).
- 🏠 **Home** con publicaciones recientes.
- ✍️ **CRUD de publicaciones**: crear, editar y eliminar posts (solo los del usuario logueado).
- ❤️ **Interacciones**: dar y quitar _Like_ a publicaciones.
- 🔍 **Buscador** de perfiles y publicaciones.
- 👤 **Perfil de usuario**: ver datos personales, número de seguidores/seguidos y publicaciones propias.
- 💬 **Comentarios** en publicaciones.
- 📱 **Diseño mobile-first** con SASS, enfocado en accesibilidad y usabilidad para mayores de 60 años.
- 🧭 Navegación mediante **React Router**.

---

## 🛠️ Tecnologías utilizadas

- **React** – Librería principal para la construcción de la UI.
- **Redux Toolkit** – Gestión global del estado.
- **React Router DOM** – Enrutamiento de la aplicación.
- **Ant Design (antd)** – Componentes estilizados.
- **SASS/SCSS** – Estilos modulares y mantenibles.
- **Git & GitHub** – Control de versiones con ramas `main` y `develop`.

---

## 📂 Estructura del proyecto

```

src/
│── assets/ # Estilos globales, imágenes, fuentes
│── components/ # Componentes reutilizables (Header, Footer, Logo, etc.)
│── redux/ # Configuración de slices y store con Redux Toolkit
│── views/ # Vistas principales (Login, Register, Profile, Home...)
│── App.jsx # Configuración principal de rutas
│── index.js # Punto de entrada de la aplicación

```

---

## 📌 Rutas principales

- `/home` → Página principal con publicaciones.
- `/login` → Inicio de sesión.
- `/register` → Registro de nuevos usuarios.
- `/profile` → Perfil del usuario logueado.
- `/search/:text` → Búsqueda de publicaciones o perfiles.

---

## ⚙️ Instalación y uso

1. Clona este repositorio y el del **backend** asociado.

```bash
git clone <https://github.com/SantiagoOH21/PROYECTO2_SMFront>
git clone <https://github.com/SantiagoOH21/PROYECTO2_SocialMedia>
```

2. Instala dependencias en ambos proyectos:

```bash
npm install
```

```bash
# Arranca primero el backend:
npm start
```

```bash
# Arranca el frontend:
npm run dev
```

```bash
# Accede a la aplicación en:
http://localhost:5173
```

---

## 🎨 Diseño y usabilidad

El diseño se ha realizado siguiendo una filosofía **minimalista, accesible y clara**, con tipografías legibles, botones grandes e interfaces intuitivas para un público objetivo de **mayores de 60 años**.

- Mobile-first 📱
- Contrastes altos para mejorar la lectura 👀
- Botones claros y fáciles de pulsar 🖱️

---

## 🧑‍💻 Autor

- Santiago Orozco Hernández [@SantiagoOH21](https://github.com/SantiagoOH21)

```

```
