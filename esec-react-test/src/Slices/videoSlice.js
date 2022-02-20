import  { createSlice } from '@reduxjs/toolkit'


export const videoSlice = createSlice({

    name: "video",
    initialState: {
        video: []
    },
    reducers: {
        addVideo: (state) => { 
            // state.value= [...value,value];
        }, 

        removeVideo: (state,action) => {
            state.video.filter( key => key !==  action.payload) ;
        }, 

        updateVideos: (state,action) => {
            console.log(action);
            state.video = action.payload ;
        }
    }

});

export const { addVideo,removeVideo,updateVideos } = videoSlice.actions;

export default videoSlice.reducer;