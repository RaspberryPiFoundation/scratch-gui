// Polyfills
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'core-js/fn/promise/finally';
import 'intl'; // For Safari 9

import React from 'react';
import ReactDOM from 'react-dom';
import {compose} from 'redux';

import GUI from '../containers/gui.jsx';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import styles from './index.css';

const parentOrigin = window.location.ancestorOrigins[0];
const projectHost = `${parentOrigin}/scratch_programs`;
const assetHost = `${parentOrigin}/scratch_assets`;

const appTarget = document.createElement('div');
appTarget.className = styles.app;
document.body.appendChild(appTarget);
GUI.setAppElement(appTarget);
const WrappedGui = compose(AppStateHOC)(GUI);

const defaultProjectId = 0;
const params = new URLSearchParams(window.location.search);
const projectId = params.get('projectId') || defaultProjectId;

ReactDOM.render(
    <WrappedGui
        menuBarHidden
        projectId={projectId}
        canCreateNew
        canSave
        autoSaveIntervalSecs={10}
        projectHost={projectHost}
        assetHost={assetHost}
    />,
    appTarget
);
