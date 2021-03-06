import React, { Component } from 'react'
import CreateButton from './Project/CreateButton';
import ProjectItem from './Project/ProjectItem';
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
//when component loaded, what should it do -> get projects from DB
    componentDidMount(){
        this.props.getProjects()
    }

    render() {

        const projectObject ={
            projectName: "ProjectName from PROPS",
            projectIdentifier: "Props",
            description: "Description from PROPS"
        };

        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                        <CreateButton/>
                        <br />
                        <hr />
                        <ProjectItem project={projectObject}/>
   
                    </div>
                </div>
            </div>
        </div>
    

        )
    }
}

Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}

// map state to properties
const mapStateToProps = state => ({
    project: state.project
});

export default connect (mapStateToProps, {getProjects}) (Dashboard);
