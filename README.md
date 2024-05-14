# s0ck3t10

a demo for multiple browser tabs to share messages between them via socket.io

## install

in server and client

```sh
npm i
```

## start

in server

```sh
npm start
```

in client

```sh
npm run dev
```

## test

open tree browser tabs and connect to http://localhost:5173/ and the inspector tool opened

share a message from a tab to all other tabs
- socketId (empty)
- message (a text)

share a message from a tab to another tab
- socketId (the socket id to share a text with)
- message (a text)




