import { configureStore } from '@reduxjs/toolkit';
import appData from './features/data';
// import userData from './features/userData'

export default configureStore({
  reducer: {
	  appData,
	//   userData
  },
})
