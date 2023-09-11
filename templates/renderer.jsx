import './style.css';
import {createRoot} from 'react-dom';
import {Q715} from './Q715.js';


import React from 'react';
import {SmartFormsRenderer} from '@aehrc/smart-forms-renderer';

// Create a container element where the React component will be rendered

// Render your React component instead
const root = createRoot(document.getElementById('renderer'));
root.render(
    <SmartFormsRenderer questionnaire={Q715}/>);