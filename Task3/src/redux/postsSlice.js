import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Async thunk: Lay danh sach post tu API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

// Async thunk: Them post moi
export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add post
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;
