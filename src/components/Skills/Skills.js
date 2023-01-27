import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Skills = () => {
    return (
        <div className='grid grid-flow-col auto-cols-[minmax(0,_2fr)] grid-flow-row auto-rows-[minmax(0,_2fr)]'>
<AiFillGithub className='text-green-500'></AiFillGithub>
<FaReact className='text-green-500 text-7xl'></FaReact>
<SiJavascript className='text-green-500 text-7xl'></SiJavascript>

            Skills
        </div>
    );
};

export default Skills;