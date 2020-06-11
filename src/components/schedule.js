import React, {Component} from 'react'
import '../css/components/schedule.css'
import clock from "./assets/clock-regular.svg"
import information from "./assets/info-circle-solid.svg"


class ScheduleContainer extends Component {
  render() {

    return (
      <div className="schedule">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">
              Schedule
          </div>
        </div>

        <div className="scheduleContainer">
          <div className="scheduleTimeLabelContainer">
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>9:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>10:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>11:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>12:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>1:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>2:00</div></div>
            <div className="scheduleTimeLabel"><div style={{'position':'absolute'}}>3:00</div></div>
          </div>
          <div className="scheduleTimeLabelBlockContainer">
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            <div className="scheduleTimeLabelBlock"></div>
            
          </div>

          <div className="scheduleContainerDay" style={{'margin-left':'70px'}}>
            <div className="scheduleDayTitle">
              Monday
            </div>
            <div className="scheduleEventContainer" style={{height:'38vh'}}>
              <div className="scheduleEventTitle">
                Event1 long name
              </div>
              <div className="scheduleEventDescription">
                38 vh because 18*2 + 2 for space between
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event3
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor enim iaculis, sagittis ex et, mattis felis. Praesent ullamcorper purus sed scelerisque bibendum. Quisque a consequat ex, eu sagittis ipsum. Vestibulum ante ipsum primis in 
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event4
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event5
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="scheduleContainerDay">
            <div className="scheduleDayTitle">
              Tuesday
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event1
              </div>
              
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'78vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventDescription">
                Description 
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
          </div>


          <div className="scheduleContainerDay">
            <div className="scheduleDayTitle">
              Wednesday
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event1
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'58vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventDescription">
                Description 
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'38vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventDescription">
                Description 
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
          </div>
          
          <div className="scheduleContainerDay">
            <div className="scheduleDayTitle">
              Thursday
            </div>
            <div className="scheduleEventContainer" style={{height:'38vh'}}>
              <div className="scheduleEventTitle">
                Event1 long name
              </div>
              <div className="scheduleEventDescription">
                38 vh because 18*2 + 2 for space between
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event3
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor enim iaculis, sagittis ex et, mattis felis. Praesent ullamcorper purus sed scelerisque bibendum. Quisque a consequat ex, eu sagittis ipsum. Vestibulum ante ipsum primis in 
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event4
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event5
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
              <div className="scheduleReadMore">
                <img src={information} alt="info"/>
                <div className="scheduleReadMoreDescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          
          <div className="scheduleContainerDay">
            <div className="scheduleDayTitle">
              Friday
            </div>
            <div className="scheduleEventContainer" style={{height:'18vh'}}>
              <div className="scheduleEventTitle">
                Event1
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'58vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventDescription">
                Description 
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
            <div className="scheduleBreak">
            </div>
            <div className="scheduleEventContainer" style={{height:'38vh'}}>
              <div className="scheduleEventTitle">
                Event2
              </div>
              <div className="scheduleEventDescription">
                Description 
              </div>
              <div className="scheduleEventTime">
                <img src={clock} alt="clock"/>
                1:00 - 2:00
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default ScheduleContainer;
