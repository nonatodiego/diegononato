import React from 'react'
import './work-card.css'
function WorkCard({item}) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo"/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <label className="company-designation">{item.designation}</label>
        <div>
          <label className="company-date">{item.year}</label>
        </div>
        <div className="work-description">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard