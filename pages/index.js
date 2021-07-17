import { useState, useEffect } from 'react'
import Head from 'next/head';
import Link from 'next/link'
import fire from '../config/fire-conf'
import CreatePost from '../components/CreatePost'

const Home = () => {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fire.firestore()
    .collection('blog')
    .onSnapshot(snap => {
      const blogs = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlog(blogs)
    });
  },[]);

  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>Blog</h1>

      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <CreatePost />

    </div>
  )
}
export default Home;
