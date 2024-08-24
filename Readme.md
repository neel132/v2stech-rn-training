***Folder Structure -***
1. We need to create a src folder after initializing the project.

**Adding folders inside src -**
1. api - to add services and endpoints
2. assets - to add all project related assets like images, icons, fonts, etc.
3. components - to add all reusable components can be atomic components or molecular components.
4. config - to add library specific config
5. hooks - to add the custom hooks
6. navigation - to add the navigators and combination of navigators within it
7. redux - to add the redux related configuration (these folder will exist only if you are using redux).
8. screens - to add the mobile screens
9. utils - to add common utilities like validators, contants, etc

----------------------------------------------------------------
.env - for keeping environment variables

**Note -**
1. Each multiple folders/files should have index


**Examples -**
1. Home - useCallback
2. Login - useMemo
3. Register - useRef

Assignment -
Short Assignment -
- Add useCallback, useMemo, useRef in an calculator app.

Long Assignment -
- Objective: Create a simple To-Do List app that allows users to switch between light and dark themes. The app should demonstrate the use of `useContext` for theme management, `useCallback` and `useMemo` for performance optimization, and `useRef` for managing a to-do input field.

Requirements -
1. Theme Management with `useContext`
    a. Create a `ThemeContext` that manages light and dark themes.
    b. Use the context to apply the selected theme across the app.
    c. Implement a theme switcher button that toggles between light and dark themes
2. To-Do List Functionality
    a. Allow users to add new to-do items.
    b. Display the list of to-do items.
    c. Allow users to delete items from the list
3. Performance Optimization
    a. Use `useCallback` to optimize the performance of functions that are passed as props to
        child components (e.g. addToDo, removeToDo).
    b. Use `useMemo` to memoize the filtered list of to-dos based on some criteria (e.g. active vs completed tasks).
4. Managing input with `useRef`
    a. Use `useRef` to manage the input field for adding new to-dos.
    b. Automatically focus the input field after adding a to-do item.

Note - 
This assignment should have proper folder structure.


### Redux Saga - one of redux middleware which helps for calling network calls.
1. Folder structure
2. Implementation

Assignment 1 - 
1. To perform crud operation using redux-saga

### Caching - For faster user experience
1. Assets/ Media are been cached in our app by-default (system does it for us).
2. If we want to cache programmatically inside a directory then we need to use CachesDirectoryPath from 'react-native-fs' library.
3. We can alternatively use react-native-cache library as well, where on backend it stores inside AsyncStorage.
4. We can also cache on network data using query libraries (graphql client, etc.) where we configure the cache policies.

***Note - It is a good practice to set the age of the cache.***

DeepLinking -
1. https://reactnavigation.org/docs/deep-linking
2. https://reactnavigation.org/docs/configuring-links

### Debugging -
1. Flipper - Installed version 0.189.0
    a. We checked the version comptability, and then installed the react-native-flipper in dev dependencies.
    b. Also did the pod installation with same version.
    c. then we disabled the hermes engine
2. Remote Debugging using chrome browser
3. React Native Debugger
4. Reactotron

### Internalization and Localization
1. Install react-i18next & i18next
2. Create i18next.ts file inside root folder
3. Create locales inside src folder
4. Wrap the root component with i18nextprovider
5. To read the locales inside function component make use of useTranslation
6. programmatically change the language use changeLanguage method.