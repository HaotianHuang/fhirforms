import {createRoot} from 'react-dom';
import {Q715} from './Q715.js';
import React from 'react';
import {SmartFormsRenderer} from '@aehrc/smart-forms-renderer';

const root = createRoot(document.getElementById('renderer'));
root.render(<SmartFormsRenderer questionnaire={Q715}/>);