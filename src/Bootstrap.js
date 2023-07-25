import React from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Bootstrap() {
    return (
        <>
            <div>Bootstrap</div>
            <Button>Tikla</Button>
            <br />
            <Button variant='secondary'>Tikla2</Button>
            <br />
            <Button variant='success'>Tikla3</Button>
            <br />
            <Button variant='warning'>Tikla4</Button>
            <br />
            <Button variant='link'>Tikla5</Button>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </>
    )
}

export default Bootstrap;