import React from 'react'

function Resume() {
  return (
    <div className='content' id='resume'>
      <h1>Resume</h1>
      <img id='resumeImg'src={`${process.env.PUBLIC_URL}/images/resume.png`}/>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download='santi-resume'>Download</a>
    </div>
  )
}

export default Resume