import { configureStore }  from '@reduxjs/toolkit'
import videoReducer from './Slices/videoSlice'
export default configureStore({

    reducer: {
        videos: videoReducer
    }

})