import axios from "axios";
import ru from "@/js/json/ru.json";
import {user, translations} from '@/js/store';

const delseAPI = axios.create({
    baseURL: "https://delse.net/"
});

const apiRequest = (method, url, request) => {
    let headers;
    let token = localStorage.getItem("token");
    let refreshToken = localStorage.getItem("refreshToken");
    if (token !== null) {
        headers = {
            "Authorization": "Bearer " + token,
            "refreshToken": refreshToken
        };
    } else {
        headers = {}
    }

    return delseAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return res.data;
    }).catch(err => {
        if (err.response === 403) {
            get('users/api/Token/Refresh')
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem("token", response.accessToken)
                        localStorage.setItem("refreshToken", response.refreshToken)
                    } else {
                        document.app.views.main.router.navigate('/login/');
                    }
                })
        } else {
            return err.response;
        }
    });
};

const get = (url, request) => apiRequest("get", url, request);

const del = (url, request) => apiRequest("delete", url, request);

const post = (url, request) => apiRequest("post", url, request);

const put = (url, request) => apiRequest("put", url, request);

const patch = (url, request) => apiRequest("patch", url, request);

let languages;
translations.update(value => ru);
translations.subscribe(value => {
    languages = value;
});

const changeLanguage = async () => {
    await get('users/api/Localizations/GetResources').then((response) => {
        let currentLang = localStorage.getItem("lang");
        if (currentLang !== null) {
            translations.update(value => JSON.parse(response[0].translations[parseInt(currentLang) - 1].resourceJson));
            translations.subscribe(value => {
                languages = value;
            });
        } else {
            translations.update(value => JSON.parse(response[0].translations[0].resourceJson));
            translations.subscribe(value => {
                languages = value;
            });
        }
    });
};

changeLanguage()

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
    return getDeepVal(languages, key) || key;
}

let api = {
    get,
    del,
    post,
    put,
    patch,
    lang,
    changeLanguage,
};
export default api;
export {
    lang,
    api,
    user,
    translations
};