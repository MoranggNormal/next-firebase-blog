import React, { useState } from 'react'
import fire from '../config/fire-conf'

const CreatePost  = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore()
    .collection('blog')
    .add({
      title,
      content
    })

    setTitle('');
    setContent('');

    setNotification('Blogpost created');

    setTimeout(() => {
      setNotification('');
    }, 2000)
  }

  return (
    <>
      <div>
        <h2>Add Blog</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="titulo">Title</label>
          <input type="text"
           value={title}
           id="titulo"
           onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor="conteudo">Content</label>
          <textarea
           value={content}
           id="conteudo"
           onChange={e => setContent(e.target.value)}
          />

          <button type="submit">Save</button>
        </form>
      </div>

    </>
  )
}

export default CreatePost;
