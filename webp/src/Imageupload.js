import React, { useState } from 'react'
import { Button } from '@mui/material';
import { db, storage } from "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "./Imageupload.css"


function Imageupload( {username} ) {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //上傳進度條
                const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                //失敗的話
                console.log(error);
                alert(error.message);
            },
            () => {
                //完成上傳後
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        //放進資料庫
                        db.collection("posts").add({    //因為時間跟資料庫不同 => timestamp
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username,
                        });

                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    })   
            }
        )
    }

  return (
    <div className='imageupload'>
        {/* 進度條 */}
        <progress className='imageupload__progress' value={progress} max="100" />
        {/* 輸入標題 */}
        <input type="text" placeholder="輸入標題..." onChange={(e) => setCaption(e.target.value)} value={caption}/>
        {/* 選照片 */}
        <input type="file" style={{marginTop:"10px"}} onChange={handleChange} />
        {/* 發文按鈕 */}
        <Button onClick={handleUpload}>
            Upload
        </Button>
    </div>
  )
}

export default Imageupload