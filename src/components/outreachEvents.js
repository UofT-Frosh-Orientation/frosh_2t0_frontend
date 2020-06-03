import React, {Component} from 'react'
import '../css/components/outreach.css'


class OutreachEvents extends Component {
  render() {

    return (
      <div className="outreach">
        <div className="outreachLandingImage">
          <p>Outreach</p>
          <div className='outreachLandingImageOverlay'></div>
          <img src="https://photos.smugmug.com/1T9-2T0/Frosh-Week/Frosh-Events/Cheer-off/i-gGx2t7W/0/41239513/XL/_IGP8970-XL.jpg"></img>
        </div>
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Events
          </div>
        </div>
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Student Handbook
          </div>
        </div>
      </div>
    )
  }
}


export default OutreachEvents;
