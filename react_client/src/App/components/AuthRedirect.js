
import React, {useState}  from 'react';
import RenderOnce from "./RenderOnce"

const MainNavbar = (props) => {
    RenderOnce(() => {
        fetch("/api/v1/user/auth")
            .then(res => {
                if (res.status !== undefined && res.status == 401) {
                    window.location.href = "/login";
                }
            });
    }) ;

    return (
        <div></div>
    );
};

export default MainNavbar;