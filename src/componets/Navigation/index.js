import React, { useState } from 'react';

function Navigation (props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    // Initialize active tab as 'About'
    const [activeTab, setActiveTab] = useState('About'); 

    const handlePageChange = (tab) => {
        // Update active tab when a new tab is clicked
        setActiveTab(tab); 
        props.handlePageChange(tab);
    };

    return (
        <ul className='nav'>
            {tabs.map(tab => (
                <li className='nav-item' key={tab}>
                    <a
                    href={'#' + tab.toLowerCase()}
                    onClick={() => handlePageChange(tab)}
                    className={
                        activeTab === tab ? 'nav-link active' : 'nav-link'
                    }
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
