 import React from "react";
 import { style } from "./Nav"
 function Nav() {
    return(
        <nav class={style.navbar}>
            <div id="logo">
                <img src="assets/logo-backgroudNone.png" alt="" />
            </div>
            <div id="lista-util">
                <ul>
                    <li>serviços</li>
                    <li>horarios</li>
                    <li>sobre</li>
                </ul>
            </div>
        </nav>
    )
 }



 export default Nav