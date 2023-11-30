import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import search from '@/assets/search.png';
import client from '@/assets/happyClient.jpg';
import Lamp from '@/assets/lamp.svg';

function TODO() {
    TODO2();
}

function TODO2() {
    throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    //const increment = () => setCount(prev => prev + 1);

    const increment = () => TODO();

    return (
        <div data-testid={'App.DataTestId'}>

            <h1>PLATFORM={__PLATFORM__}</h1>
            <h2>ergwergwg</h2>
            <h2>ergwergwg</h2>
            <div>
                <img width={100} height={100} src={search} alt='someSearch'/>
                <img width={200} height={100} src={client} alt='someClient'/>
            </div>
            <div>
                <Lamp />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <About />
        </div>
    )
}