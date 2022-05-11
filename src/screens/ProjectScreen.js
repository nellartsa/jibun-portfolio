import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../projects'

const ProjectScreen = ({ match }) => {
  const { id } = useParams()
  const project = projects.find((p) => p._id === parseInt(id))

  return <div>ProjectScreen</div>
}

export default ProjectScreen
