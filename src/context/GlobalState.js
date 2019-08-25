import React, { Component } from 'react';
import AuthContext from './drawer-context';
import axios from './../Helpers/axios';

class GlobalState extends Component {
    state = {
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
        projectLoading: true
    }
    switchDrawer = () => {
        this.setState((prevState) => ({
            ...prevState,
            open: !prevState.open
        }));
    }

    componentDidMount() {
        let promises = [];
        promises.push(axios.get("/api/ability?abilityType=fundamentals"));
        promises.push(axios.get("/api/ability?abilityType=skills"));
        promises.push(axios.get("/api/ability?abilityType=tools"));
        promises.push(axios.get("/api/ability?abilityType=additional"));
        promises.push(axios.get("/api/achievement"));
        promises.push(axios.get("/api/job"));

        Promise.all(promises).then((res) => {
            this.setState(prevState => ({
                open: prevState.open,
                ability: {
                    fundamentals: res[0].data,
                    skills: res[1].data,
                    tools: res[2].data,
                    additionals: res[3].data,
                },
                achievements: res[4].data,
                jobs: res[5].data,
                projects: prevState.projects,
                loading: false,
                projectLoading: prevState.projectLoading
            }))
        });

        axios.get("/api/project").then((res) => {
            const process = () => {
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].projectImage = `data:${res.data[i].projectImage.contentType};base64,
                    ${btoa(new Uint8Array(res.data[i].projectImage.data.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, ''))
                        } `;
                }
                return res.data;
            }
            this.setState(prevState => ({
                ...prevState,
                projects: process(),
                projectLoading: false
            }))
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                open: this.state.open,
                ability: {
                    fundamentals: this.state.ability.fundamentals,
                    skills: this.state.ability.skills,
                    tools: this.state.ability.tools,
                    additionals: this.state.ability.additionals
                },
                achievements: this.state.achievements,
                jobs: this.state.jobs,
                projects: this.state.projects,
                loading: this.state.loading,
                switchDrawer: this.switchDrawer,
                projectLoading: true
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default GlobalState;