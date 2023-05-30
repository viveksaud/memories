import * as api from '../api'

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        // console.log('posst ko post'+post);
        // console.log(post);
        const { data } = await api.createPost(post);
        // const  data = await api.createPost(post);
// console.log("post ko data"+data);
// console.log(data);
        dispatch({ type: 'CREATE', payload: data }); 
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        // console.log('level2 ...........');
        // console.log(id);
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    }catch(error){
        console.log(error);
    }
}