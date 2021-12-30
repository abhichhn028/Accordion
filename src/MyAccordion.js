import React, { Component } from 'react'
import './Accordion.css'
import Accordion from './Accordion'
export default class MyAccordion extends Component {
    render() {
        return (
            <section className="accordion container">
                <div className="accordion_container">
                    <Accordion></Accordion>
                    <Accordion></Accordion>
                    <Accordion></Accordion>
                    <Accordion></Accordion>   
                </div>
            </section>
        )
    }
}
