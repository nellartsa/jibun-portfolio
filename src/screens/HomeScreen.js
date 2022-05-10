import React from 'react'
import projects from '../projects'

const HomeScreen = () => {
  console.log(projects)

  return (
    <div>
      {projects.map((p) => (
        <div key={p._id}>
          <div>{p.title}</div>

          {p.gallery.map((g) => (
            <img key={g._id} src={g.image} alt='' />
          ))}
        </div>
      ))}
    </div>
  )
}

export default HomeScreen
