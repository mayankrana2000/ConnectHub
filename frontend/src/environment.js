let IS_PROD = true;
const server = IS_PROD ?
    "https://connecthubbackend-j1uc.onrender.com" :

    "http://localhost:8000"


export default server;