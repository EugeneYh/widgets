import React, {useState} from 'react';
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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [toggleDropdown, setToggleDropdown] = useState(true);

    return  (
        <div>
            <button onClick={() => setToggleDropdown(!toggleDropdown)}>Toggle Dropdown</button>
            {toggleDropdown ?
                <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
            /> : null
            }
            
        </div>
    );
}