import React from 'react';

export default React.createContext({
    open: false,
    ability: {
        fundamentals: [],
        skills: [],
        tools: [],
        additionals: []
    },
    achievements: [],
    jobs: [],
    projects: [],
    loading: true,
    projectLoading: true,
    switchDrawer: () => {}
});