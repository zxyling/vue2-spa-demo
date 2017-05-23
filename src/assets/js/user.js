/**
 * @file 用户登录统一处理
 * @author 
 */

const loginUrl = '/login';

const login = (flag, url = window.location.href) => {
    if (!!!flag) {
        window.location.href = loginUrl + '?CallBackUrl=' + encodeURIComponent(url);
    }
};

export default {
    login
};
