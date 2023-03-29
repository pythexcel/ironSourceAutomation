const config = require('./config.json');
const axios = require('axios');

const auth = async (secretkey,refreshToken)=>{
    const authUrl = 'https://platform.ironsrc.com/partners/publisher/auth';
    const configs = {
        headers:{
            secretkey: config.secretKey,
            refreshToken: config.refreshToken}
    }
    // console.log(config)
    const response = await axios.get(authUrl , configs);
    if(response.status !== 200) return false;
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
    return response.data;
}

const createApp = async ()=>{
const createAppApiUrl = 'https://platform.ironsrc.com/partners/publisher/applications/v6';
    const data = config.appData; 
    const response = await axios.post(createAppApiUrl,data);
    console.log(response)
}


(async ()=>{
    if(!(await auth())){
        console.log("auth error");
        return false
    }

    createApp();
})();