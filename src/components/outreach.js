import React, {Component} from 'react'
import '../css/components/outreach.css'


class OutreachHeader extends Component {
  render() {

    return (
      <div className="outreach">
        <div className="landingImage">
          <p>Outreach</p>
          <div className='landingImageOverlay'></div>
          <img src="https://photos.smugmug.com/1T9-2T0/Frosh-Week/Frosh-Events/Cheer-off/i-gGx2t7W/0/41239513/XL/_IGP8970-XL.jpg" alt="outreach landing"></img>
        </div>
      </div>
    )
  }
}

class OutreachEvents extends Component {
  render() {
    return (
      <div className="outreach">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Events
          </div>
        </div>
        
        <div className="outreachEventContainer">
          <div className="outreachCalendarContainer">
            <div className="outreachCalendarContainerMonth">
              May
            </div>
            <div className="outreachCalendarContainerDay">
              25
            </div>
            <div className="outreachCalendarContainerTime">
              4-6
            </div>
          </div>
          <div className="outreachInfoContainer">
            <div className="outreachInfoHeader">
              Event 1
            </div>
            <div className="outreachInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor enim iaculis, sagittis ex et, mattis felis. Praesent ullamcorper purus sed scelerisque bibendum. Quisque a consequat ex, eu sagittis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eleifend convallis est non suscipit. Nam at feugiat nibh. 
            </div>
            <a href="https://google.ca">
              <div className="outreachSignUpButton">
                Sign up
              </div>
            </a>
          </div>
        </div>
        <div className="outreachEventContainer">
          <div className="outreachCalendarContainer">
            <div className="outreachCalendarContainerMonth">
              June
            </div>
            <div className="outreachCalendarContainerDay">
              26
            </div>
            <div className="outreachCalendarContainerTime">
              4-6
            </div>
          </div>
          <div className="outreachInfoContainer">
            <div className="outreachInfoHeader">
              Event 2
            </div>
            <div className="outreachInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor enim iaculis, sagittis ex et, meugiat nibh. 
            </div>
            <a href="https://google.ca">
              <div className="outreachSignUpButton">
                Sign up
              </div>
            </a>
          </div>
        </div>
        <div className="outreachEventContainer">
          <div className="outreachCalendarContainer">
            <div className="outreachCalendarContainerMonth">
              July
            </div>
            <div className="outreachCalendarContainerDay">
              29
            </div>
            <div className="outreachCalendarContainerTime">
              4-6
            </div>
          </div>
          <div className="outreachInfoContainer">
            <div className="outreachInfoHeader">
              Event 3
            </div>
            <div className="outreachInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor enim iaculis, sagittis ex et, mattis felis. Praesent ullamcorper purus sed scelerisque bibendum. Quisque a consequat ex, eu sagittis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eleifend convallis est non suscipit. Nam at feugiat nibh. 
            </div>
            <a href="https://google.ca">
              <div className="outreachSignUpButton">
                Sign up
              </div>
            </a>
          </div>
        </div>
      </div>
        
    )
  }
}

class OutreachHandbook extends Component {
  render() {

    return (
      <div className="outreach">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Student Handbook
          </div>
        </div>
        <div className="outreachEmptyHandbook">
        </div>
      </div>
    )
  }
}

export {
  OutreachHeader,
  OutreachEvents,
  OutreachHandbook,
}