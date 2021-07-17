import { useState } from 'react';
import fire from '../../config/fire-conf';
import { useRouter } from 'next/router'

const Login = () => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [notify, setNotification] = useState('');
   const router = useRouter();

   const handleLogin = (e) => {
     e.preventDefault();

     fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((error) => {
        console.log(error.code, error.message);
        setNotification(error.message)

        setTimeout(() => {
          setNotification('')
        },)
      })

      setUsername('')
      setPassword('')

      router.push('/')
   }
  return (
    <div>
     <h1>Login</h1>
     {notify}
     <form onSubmit={handleLogin}>
       Email<input type="text" value={username}
       onChange= {({target}) => setUsername(target.value)} />
       <br />
       Password<input type="password" value={password}
       onChange={({target}) => setPassword(target.value)} />
       <br />
       <button type="submit">Login</button>
     </form>
   </div>
  )
}

export default Login
