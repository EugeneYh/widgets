import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';


const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among developers",
    },
    {
        title: "How do you use React?",
        content: "Use Rect by creating components",
    }
]

export default () => {
    return  (
        <div>
            <Dropdown />
        </div>
    );
}