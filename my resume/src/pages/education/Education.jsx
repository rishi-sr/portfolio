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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem animi error cum consectetur nostrum inventore! Error, mollitia nesciunt? Corrupti alias qui assumenda incidunt inventore, exercitationem eligendi in labore culpa.</p>
          </div>
        </div>
        <div className="card c2">
          <div className="cardhead">
            <div className="cardlogo">
              <img src="bvv.jpg" alt="" />
            </div>
            <div className="details">
              <h1>CBSE(XII) - PCM</h1>
              <h6>Bal Vikas Vidyalaya</h6>
              <p>2019 - 2021</p>
            </div>
          </div>
          <div className="cardcontent">
            <h3>Percentage: 76.8%</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem animi error cum consectetur nostrum inventore! Error, mollitia nesciunt? Corrupti alias qui assumenda incidunt inventore, exercitationem eligendi in labore culpa.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem animi error cum consectetur nostrum inventore! Error, mollitia nesciunt? Corrupti alias qui assumenda incidunt inventore, exercitationem eligendi in labore culpa.</p>
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
