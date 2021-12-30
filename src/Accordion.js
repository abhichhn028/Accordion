import React, { useState } from 'react'
import './Accordion.css'

const Accordion = () => {
    const [data, setData] = useState(false);

    const changeHandler = () => {
        setData(!data);
    }

    return (
        <div className="accordion__item">
            <header className="accordion__header">
                <i onClick={changeHandler} className={data ? `fa fa-minus accordion__icon` : `fa fa-plus accordion__icon`}></i>
                <h3 className="accordion__title">What"s an accordion?</h3>
            </header>
            {data &&
                <div className="accordion__content">
                    <p className="accordion__description">
                        An accordion always contains the category title, an expanded and a collapsed state,
                        an icon indicating expansion, and the spacing between them.
                  </p>
                </div>
            }

        </div>
    );
}

export default Accordion;