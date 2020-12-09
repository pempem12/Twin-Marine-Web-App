
import React  from 'react';
import RenderOnce from "./RenderOnce"

const AuthRedirect = (setState_User) => {
    RenderOnce(() => {
        fetch("/api/v1/user/auth")
            .then(res => {
                if (res.status !== undefined && res.status === 401) {
                    window.location.href = "/login";
                    return Promise.reject("Redirect to login");
                } else {
                    return res.json();
                }
            })
            .then(user => setState_User(user))
            .catch(err => console.log(err));
    }) ;

    return (
        <div></div>
    );
};

export default AuthRedirect;