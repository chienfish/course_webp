import React, { useEffect, useState } from 'react'
import { Header } from 'semantic-ui-react'
import { Avatar } from '@mui/material';
import { PlaceOutlined, PeopleOutline, StarOutline, MailOutline, InsertLinkOutlined } from '@mui/icons-material';
import './App.css'

const App = () => {

    const url = 'https://api.github.com/users/cjwu'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(json => setData(json))
    }, [])

    return (
        <div className='all'>
            <Avatar src={data.avatar_url} sx={{ width: 250, height:250 }}/>
            <Header style={{fontSize:30, fontWeight:"bolder"}}> {data.name} </Header>
            <Header style={{fontSize:18 ,color:'#828282'}}> {data.login} </Header>
            <button> Edit profile </button>

            <div>
                <PeopleOutline style={{color:'#828282'}}/>&nbsp;
                {data.followers}
                <span style={{color:'#828282'}}> followers •</span>
                {data.following}&nbsp;
                <span style={{color:'#828282'}}> following •</span>
                <StarOutline style={{color:'#828282'}}/>
                {data.public_gists}
            </div>

            <div style={{marginTop:"20px"}}> <PlaceOutlined style={{color:'#828282'}}/>&nbsp;{data.location} </div>
            <div> <MailOutline style={{color:'#828282'}}/>&nbsp;{data.html_url} </div>
            <div> <InsertLinkOutlined style={{color:'#828282'}}/>&nbsp;{data.blog} </div>
            
        </div>
    )
}
export default App