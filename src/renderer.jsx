import {createRoot} from 'react-dom';
import React, {useEffect, useState} from 'react';
import {SmartFormsRenderer} from '@aehrc/smart-forms-renderer';

const root = createRoot(document.getElementById('renderer'));
root.render(<Renderer/>);


function Renderer() {
    const [questionnaire, setQuestionnaire] = useState(null)

    let formUrl = new URLSearchParams(window.location.search).get('form_url');

    useEffect(() => {
        fetch(formUrl)
            .then(response => response.json())
            .then(data => {
                setQuestionnaire(data)
            })
    }, []);

    if (questionnaire === null) {
        return <div>Loading...</div>
    }

    return (
        <SmartFormsRenderer questionnaire={questionnaire}/>
    );
}