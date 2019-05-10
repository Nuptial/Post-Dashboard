import {
    FETCH_POSTS,
    UPDATE_POST,
    DELETE_POST
} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data.slice(0, 6);
        case UPDATE_POST:
            var updatedPost = state.find(post => {
                return post.id === action.updatedPost.id;
            });
            var foundIndex = state.findIndex(post => post.id == action.updatedPost.id);


            updatedPost.title = action.postDetails.title;
            updatedPost.body = action.postDetails.body;

            state[foundIndex] = updatedPost;

            return [...state]
        case DELETE_POST:
            var newState = state.filter((item, index) => item.id !== action.data.id);

            return [...newState]
    }

    return state;
}