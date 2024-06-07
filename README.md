# 🌟  Olympus Project (Architecture Atomic Design)

¡Bienvenido a tu nuevo proyecto web! Este proyecto utiliza **Vite** junto con **React** y **TypeScript** para crear una experiencia de desarrollo moderna y eficiente.

## 📋 Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)

## 🚀 Requisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## 🛠 Instalación

1. Clona este repositorio:

    ```sh
    git clone <URL-del-repositorio>
    ```

2. Navega a la carpeta del proyecto:

    ```sh
    cd nombre-del-proyecto
    ```

3. Instala las dependencias:

    ```sh
    npm install
    ```

    o si prefieres Yarn:

    ```sh
    yarn install
    ```

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev` o `yarn dev`

Inicia la aplicación en modo desarrollo.\
Abre [http://localhost:5173](http://localhost:5173) para verlo en tu navegador.

La página se recargará cuando realices cambios.\
También puedes ver cualquier error de lint en la consola.

### `npm run build` o `yarn build`

Construye la aplicación para producción en la carpeta `dist`.\
Empaqueta React de manera correcta en modo de producción y optimiza la compilación para el mejor rendimiento.

### `npm run preview` o `yarn preview`

Sirve una vista previa de la aplicación construida en producción localmente.

## 🗂 Estructura del Proyecto

La estructura de carpetas y archivos es la siguiente:

```
└───src
    │   App.css
    │   App.tsx
    │   index.css
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───assets
    │       react.svg
    │
    ├───components
    │   ├───atoms
    │   │       Button.tsx
    │   │       Input.tsx
    │   │
    │   ├───molecules
    │   │       SearchBar.tsx
    │   │
    │   ├───organisms
    │   │       Footer.tsx
    │   │       Header.tsx
    │   │       Navbar.tsx
    │   │
    │   ├───pages
    │   │       AboutPage.tsx
    │   │       GroupsPage.tsx
    │   │       HomePage.tsx
    │   │       LoginPage.tsx
    │   │       MembersPage.tsx
    │   │       NotFoundPage.tsx
    │   │       ProfilePage.tsx
    │   │       RegisterPage.tsx
    │   │       SettingsPage.tsx
    │   │       SocialNetworksPage.tsx
    │   │
    │   └───templates
    │           MainTemplate.tsx
    │
    ├───context
    │       AppContext.tsx
    │
    ├───hooks
    │       useCustomHook.ts
    │
    ├───routes
    │       Routes.tsx
    │
    ├───services
    │       apiService.ts
    │
    ├───styles
    │       globals.css
    │
    ├───types
    │       index.ts
    │
    └───utils
            helpers.ts
```

