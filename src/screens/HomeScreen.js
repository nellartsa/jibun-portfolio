import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../projects'

const HomeScreen = () => {
  console.log(projects)

  return (
    <div>
      {projects.map((p) => (
        <div key={p._id}>
          <Link to={`projects/${p._id}`}>
            <div>{p.title}</div>
          </Link>
          {/* <div dangerouslySetInnerHTML={{ __html: p.description }} /> */}

          {/* {p.gallery.map((g) => (
            <img key={g._id} src={g.image} alt='' />
          ))} */}
        </div>
      ))}
    </div>
  )
}

export default HomeScreen
