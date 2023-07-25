import React from 'react'
import logo from "../../prototurk/src/logo.svg"
import Test from "./Test"
import styles from "../src/App.module.css"
import { Title } from "./Components"
import Bootstrap from "./Bootstrap"
function Styles() {
    return (
        <div className={styles.App}>
            <h3>{process.env.NODE_ENV}</h3>
            <Title>
                {process.env.REACT_APP_API_URL}
            </Title>
            <Title theme="dark">
                {process.env.REACT_APP_API_URL}
            </Title>
            {
                process.env.NODE_ENV === 'production' && (
                    <>
                        <img src="/logo192.png" alt="" />
                        <img src={logo} alt="" />
                    </>
                )
            }
            <Test />
            <Bootstrap></Bootstrap>
        </div>
    )
}

export default Styles