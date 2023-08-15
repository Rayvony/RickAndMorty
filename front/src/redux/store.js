import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Ajusta la ruta según tu estructura de archivos

const store = configureStore({
  reducer: rootReducer,
  // Agrega cualquier configuración adicional que necesites
});

export default store;
