import axios from "axios";
import ru from "@/js/json/ru.json";

const axiosAPI = axios.create({
    baseURL : "https://delse.net/"
});

const getDeepVal = (obj, path) => {
    if (typeof obj === "undefined" || obj === null) return false;
    path = path.split(new RegExp("[\\.\\[\\]\\\"\\']{1,2}", "g"));

    for (let i = 0, l = path.length; i < l; i++) {
        if (path[i] === "") continue;
        obj = obj[path[i]];
        if (typeof obj === "undefined" || obj === null) return false;
    }
    return obj;
}

const lang = (key) => {
    return getDeepVal(ru, key) || key;
}

const apiRequest = (method, url, request) => {
    let headers;
    let token = localStorage.getItem("token");
    let refreshToken = localStorage.getItem("refreshToken");
    if(token !== null){
        headers = {
            "Authorization": "Bearer "+token,
            "refreshToken": refreshToken
        };
    }else{
        headers = {}
    }

    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return res.data;
    }).catch(err => {
        if(err.response === 403){
            get('users/api/Token/Refresh')
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem("token", response.accessToken)
                        localStorage.setItem("refreshToken", response.refreshToken)
                    } else {
                        document.app.views.main.router.navigate('/login/');
                    }
                })
        }else{
            return err.response;
        }
    });
};

const get = (url, request) => apiRequest("get",url,request);

const del = (url, request) =>  apiRequest("delete", url, request);

const post = (url, request) => apiRequest("post", url, request);

const put = (url, request) => apiRequest("put", url, request);

const patch = (url, request) =>  apiRequest("patch", url, request);

let api = {
    get,
    del,
    post,
    put,
    patch,
    lang
};
export default api;
export {
    lang,
    api
};