import React from "react";
import PsoMain from './psomain';
import MooraPso from './MooraPso';
import DaPso from './DaPso';

import { Routes, Route } from "react-router-dom";
import Psodesc from "./psodesc";
import TopsisPso from "./TopsisPso";
const PSO = () => {
    return (
        <div>
            <Psodesc />
            <div className="App bg-white">
                <Routes>
                    <Route path='/PsoMain' component={<PsoMain />} />
                    <Route path='/DaPso' component={<DaPso />} />
                    <Route path='/MooraPso' component={<MooraPso />} />
                    <Route path='/TopsisPso' component={<TopsisPso/>} />
                </Routes>
            </div>
        </div>
    );
}
export default PSO;