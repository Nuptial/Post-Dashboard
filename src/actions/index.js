import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ACTIVE_MODAL = 'ACTIVE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
const POST_URL = 'http://jsonplaceholder.typicode.com/posts';
const USER_DETAIL_URL = 'https://jsonplaceholder.typicode.com/users/';

export function activeModal(post) {
    return {
        type: ACTIVE_MODAL,
        data: post
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}

export function fetchPosts() {
    const request = axios.get(POST_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function updatePost(postDetails, updatedPost) {
    return {
        type: UPDATE_POST,
        postDetails,
        updatedPost
    }
}

export function deletePost(post) {
    return {
        type: DELETE_POST,
        data: post
    }
}