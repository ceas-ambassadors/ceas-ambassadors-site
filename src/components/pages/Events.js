import React, {useEffect, useState} from 'react';
import { Row, Column, RadioButton, RadioButtonGroup } from '@carbon/react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';
import { Close } from '@carbon/icons-react';


// TODO: Figure out passing params in onClick
 const Events = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [publicEvent, setPublicEvent] = useState(false);
    const [meetingsModalOpen, setMeetingModalOpen] = useState(false);
    const [eventsModalOpen, setEventsModalOpen] = useState(false);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:9000/event")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result['events']);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

    const renderMeetingsModal = () => {
      if (meetingsModalOpen) {
        return (
          <div className='meetings--modal-container'>
            <div className='meetings--modal-overlay'/>
            <div className='meetings--modal'>
              <div className='meetings--modal-multi-inputs'>
                <h2 className='meetings--modal-title'>Create Meeting</h2>
                <div className='close-icon' onClick={() => setMeetingModalOpen(false)}>
                  <Close size={24}/>
                </div>
              </div>
              <TextInput placeholderText='First General Body Meeting'>Title</TextInput>
              <div className='meetings--modal-multi-inputs'>
                <TextInput textboxWidth='50' placeholderText='2023 January 01 12:30 PM'>Start Time</TextInput>
                <TextInput type='modal' textboxWidth='50' placeholderText='2023 January 01 1:30 PM'>End Time</TextInput>
              </div>
              <div className='meetings--modal-multi-inputs'>
                <TextInput placeholderText='CRC 3250'>Location</TextInput>
                <Checkbox title='Public' checked={publicEvent} type='modal' onClick={() => setPublicEvent(!publicEvent)}/>
              </div>
              <div className='meetings--modal-multi-inputs'>
                <TextInput placeholderText='Jeremy Hill'>Speakers</TextInput>
                <TextInput placeholderText="Richie's Chicken">Food</TextInput>
              </div>
              <TextInput type='large'>Description</TextInput>
              <div className='meetings--modal-actions'>
                <Button type='admin'>Add Meeting</Button>
              </div>
            </div>
          </div>
        );
      }
      return null;
    }

    const renderEventsModal = () => {
      if (eventsModalOpen) {
        return (
          <div className='meetings--modal-container'>
            <div className='meetings--modal-overlay'/>
            <div className='events--modal'>
              <div className='meetings--modal-multi-inputs'>
                <h2 className='meetings--modal-title'>Create Event</h2>
                <div className='close-icon' onClick={() => setEventsModalOpen(false)}>
                  <Close size={24}/>
                </div>
              </div>
              <TextInput placeholderText='College Close-up'>Title</TextInput>
              <div className='meetings--modal-multi-inputs'>
                <TextInput textboxWidth='50' placeholderText='2023 January 01 11:30 AM'>Start Time</TextInput>
                <TextInput type='modal' textboxWidth='50' placeholderText='2023 January 01 1:30 PM'>End Time</TextInput>
              </div>
              <div className='meetings--modal-multi-inputs'>
                <TextInput placeholderText='Mantei 427'>Location</TextInput>
                <Checkbox title='Public' checked={publicEvent} onClick={() => setPublicEvent(!publicEvent)}/>
                <TextInput placeholderText='5'>Max Ambassadors</TextInput>
                <TextInput placeholderText='1'>Point Value</TextInput>
              </div>
              <h4 className='meetings--modal-radio-title'>Event Type</h4>
              <RadioButtonGroup 
                className='meetings--modal-radio-group' 
                defaultSelected='tour'
              >
                <RadioButton
                    labelText='Tour'
                    value='tour'
                    id='tour-radio-option'
                />
                <RadioButton
                    labelText='1:1'
                    value='one-on-one'
                    id='one-on-one-radio-option'
                />
                <RadioButton
                    labelText='Panel'
                    value='panel'
                    id='panel-radio-option'
                />
                <RadioButton
                    labelText='Instagram Takeover'
                    value='instagram-takeover'
                    id='instagram-takeover-radio-option'
                />
                <RadioButton
                    labelText='Other'
                    value='other'
                    id='other-radio-option'
                />
              </RadioButtonGroup>
              <TextInput type='long'>Description</TextInput>
              <div className='meetings--modal-actions'>
                <Button type='admin'>Add Event</Button>
              </div>
            </div>
          </div>
        );
      }
      return null;
    }

    return (
      <>
        <Row className='page-content'>
          <Column>
          <Row className='meetings-table'>
            <div className='events-table--create-meeting'>
              <h1>Meetings</h1>
              <Button type='admin' onClick={() => setMeetingModalOpen(!meetingsModalOpen)}>Add Meeting</Button>
            </div>
            {renderMeetingsModal()}
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Start Time</th>
                  <th className='disp-col'>End Time</th>
                  <th>Food</th>
                  <th>Location</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </Row>
          <Row className='events-table'>
            <div className='events-table--create-meeting'>
              <h1>Events</h1>
              <Button type='admin' onClick={() => setEventsModalOpen(!eventsModalOpen)}>Add Event</Button>
            </div>
            {renderEventsModal()}
            <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Start Time</th>
                    <th className='disp-col'>End Time</th>
                    <th>Location</th>
                    <th>Point Value</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <th></th>
                </tbody>
            </table>
          </Row>
          </Column>
        </Row>
      </>
    );
};

export default Events;