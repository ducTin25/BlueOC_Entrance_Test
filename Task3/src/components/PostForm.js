import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      dispatch(addPost({ title, body }));
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="post-form">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            placeholder="Enter post body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows="4"
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
