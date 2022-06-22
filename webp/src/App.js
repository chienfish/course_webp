import './App.css';
import './Imageupload.css';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import { auth, db } from './firebase';
import { Modal, Button, Box, Input } from '@mui/material';
import Imageupload from './Imageupload';


function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  const style = {   // Modal的style
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {     //知道現在誰登入
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) { // 登入
        console.log(authUser);    //用來確認重轉之後 使用者是不是剛剛那個 (因為還沒登出)
        setUser(authUser);
      } else {    //登出
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {   // 每次更新post都去抓
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    }) 
  }, []);

  const signUp = (event) => { //註冊
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error) => alert(error.message))

    setOpen(false);
  }

  const signIn = (event) => {   //登入
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))

    setOpenSignIn(false);
  }

  return (
    <div className="App">

      {/* 註冊 */}
      <Modal open={open} onClose={() => setOpen(false)}>  
        <Box sx={style}>
          <form className='app_signup'>
            <center>
              <img className='app_headerImage' src="/images/logo.png" alt=''/>
            </center>

            <Input
              placeholder='username' value={username}
              onChange={(e) => setUsername(e.target.value)}>
            </Input>

            <Input
              placeholder='email' value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Input>

            <Input
              placeholder='password' type='password' value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Input>

            <Button type='submit' onClick={signUp}>註冊</Button>

          </form>
        </Box>
      </Modal>

      {/* 登入 */}
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <Box sx={style}>
          <form className='app_signup'>
            <center>
              <img className='app_headerImage' src="/images/logo.png" alt=''/>
            </center>

            <Input
              placeholder='email' value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Input>

            <Input
              placeholder='password' type='password' value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Input>

            <Button type='submit' onClick={signIn}>登入</Button>

          </form>
        </Box>
      </Modal>

      <div className='app_header'>
        <img className='app_headerImage' src="/images/logo.png" alt=""/><br/>
        {user ? (
          <Button onClick={() => auth.signOut()}>登出</Button>
        ) : (
          <div className='app_loginContainer'>
            <Button onClick={() => setOpenSignIn(true)}>登入</Button>
            <Button onClick={() => setOpen(true)}>註冊</Button>
          </div>
      )}
      </div>

      <div className="app_posts">
        {
          posts.map(({id, post}) => (
            <Post key={id} postId={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} name={user?.displayName}/>
          ))
        }
      </div>

      {user?.displayName ? (
        <Imageupload username={user.displayName} />
      ) : (
        <h3 className='imageupload'>▶ 請先登入才能發文 ◀</h3>
      )}

    </div>
  );
}

export default App;
