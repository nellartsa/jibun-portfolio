import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../projects'

const HomeScreen = () => {
  console.log(projects)

  return (
    <>
      <section>
        <div className='container'>
          <div className='hero-segment'>
            <div>
              <h6 className='fw-reg'>Hi, I'm</h6>
              <h1 className='mi-name'>Allen Astral G. De Jesus</h1>
              <div className='professions'>
                <div>UI/UX Design</div>
                <div>Frontend Developer</div>
                <div>API Developer</div>
                <div>Freelancer</div>
              </div>
            </div>
          </div>

          <div className='about-segment'>
            <div className='developer'>
              <h3>The Developer</h3>
              <p>asdmklasdlasdmasdla</p>
            </div>
            <div className='divider'></div>
            <div className='site'>
              <h3>The Site</h3>
              <p> akldnlaskdnlsakdln</p>
            </div>
          </div>

          <div className='expertise-segment'>
            <div className='skills-set'>
              <h3>Expertise</h3>
            </div>
          </div>

          <div className='project-segment'>
            <h3>Projects</h3>

            <ul className='filter'>
              <li data-filter='All'>All</li>
              <li data-filter='webAdesign'>Web Dev & Design</li>
              <li data-filter='htmlEmail'>HTML Email Templates</li>
              <li data-filter='api'>API Dev</li>
            </ul>

            {projects.map((p) => (
              <div className='item-box' key={p._id}>
                <img src={p.banner} alt='' />
                <div>{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
