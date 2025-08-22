import React from 'react'
import './education.scss'

const Education = () => {
  return (
    <>
    <div className="education">
      <div className="eduhead">
        <h1>Education</h1>
        <div className="line1"></div>
        <p>My Education has been a journey of learning and development. Here are the detailsof my academic background</p>
      </div>
      <div className="educontent">
        <div className="line2"></div>
        <div className="card c1">
          <div className="cardhead">
            <div className="cardlogo">
              <img src="niet.jpg" alt="" />
            </div>
            <div className="details">
              <h1>Bachelors of Technology (B.Tech)</h1>
              <h6>Noida Institute of Engineering and Technology</h6>
              <p>Nov 2022 - present</p>
            </div>
          </div>
          <div className="cardcontent">
            <h3>Current CGPA: 7.25</h3>
            <p>I am pursuing a B.Tech in Computer Science and Engineering at Noida Institute of Engineering and Technology, Greater Noida, with a CGPA of 7.25. Currently in my 4th year, I have gained expertise in core CS subjects, web development, and full-stack projects, with a passion for innovative software solutions.</p>
          </div>
        </div>
        <div className="card c2">
          <div className="cardhead">
            <div className="cardlogo">
              <img src="bvv.jpg" alt="" />
            </div>
            <div className="details">
              <h1>CBSE(XII) - PCM with Computer Science</h1>
              <h6>Bal Vikas Vidyalaya</h6>
              <p>2019 - 2021</p>
            </div>
          </div>
          <div className="cardcontent">
            <h3>Percentage: 76.8%</h3>
            <p>I completed my CBSE Class XII (PCM with Computer Science) from Bal Vikas Vidyalaya in 2021, securing 76.8%. My subjects included Physics, Chemistry, Mathematics, and Computer Science, which helped me develop strong logical thinking, programming fundamentals, and analytical skills. This academic foundation fueled my interest in engineering and software development..</p>
          </div>
        </div>
        <div className="card c3">
          <div className="cardhead">
            <div className="cardlogo">
              <img src="bl.jpg" alt="" />
            </div>
            <div className="details">
              <h1>CBSE (X)</h1>
              <h6>B.L. Indo Anglian Public School</h6>
              <p>2019</p>
            </div>
          </div>
          <div className="cardcontent">
            <h3>Percentage: 72.3%</h3>
            <p>I completed my CBSE Class X from B.L. Indo Anglian Public School in 2019, securing 72.3%. This stage of schooling helped me strengthen my foundation in Mathematics, Science, and English, while also building qualities like discipline, problem-solving, and teamwork, which guided me towards pursuing Computer Science and Engineering later.</p>
          </div>
        </div>
        <div className="img i1"><img src="niet.jpg" alt=""  /></div>
        <div className="img i2"><img src="bvv.jpg" alt="" /></div>
        <div className="img i3"><img src="bl.jpg" alt="" /></div>
      </div>
    </div>
    </>
  )
}

export default Education
