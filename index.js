const express = require('express');
// import express from 'express'
const app = express();
require('dotenv').config()
const port = 3000;

githubData = {
  "login": "zayan-7909",
  "id": 292801348,
  "node_id": "U_kgDOEXPLRA",
  "avatar_url": "https://avatars.githubusercontent.com/u/292801348?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/zayan-7909",
  "html_url": "https://github.com/zayan-7909",
  "followers_url": "https://api.github.com/users/zayan-7909/followers",
  "following_url": "https://api.github.com/users/zayan-7909/following{/other_user}",
  "gists_url": "https://api.github.com/users/zayan-7909/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/zayan-7909/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/zayan-7909/subscriptions",
  "organizations_url": "https://api.github.com/users/zayan-7909/orgs",
  "repos_url": "https://api.github.com/users/zayan-7909/repos",
  "events_url": "https://api.github.com/users/zayan-7909/events{/privacy}",
  "received_events_url": "https://api.github.com/users/zayan-7909/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Md Zayan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "B-Tech CSE student at NIT Jalandhar",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-06-11T13:36:40Z",
  "updated_at": "2026-07-23T13:56:30Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('zayan.twitter.com');
});

app.get('/login', (req,res)=>{
    res.send('<h1>Please Login again</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h1>Welcome to my youtube channel</h1>')
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});