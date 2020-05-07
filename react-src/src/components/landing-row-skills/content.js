import React from 'react';

import DataEngineeringSVG from './DataEngineeringSVG';
import DevOpsSVG from './DevOpsSVG';
import WebDevelopmentSVG from './WebDevelopmentSVG';
import LeadershipSVG from './LeadershipSVG';

export default {
    skills: [

        {
            skillName: 'Web Development',
            themeColor: 'roseMadder',
            svgComponent: <WebDevelopmentSVG/>,
            description: <p> Creating robust web apps to UX and Bussiness Requirements. Frontend, Backend, Database; I build across the entire stack. </p>
        },
        {
            skillName: 'DevOps',
            themeColor: 'green',
            svgComponent: <DevOpsSVG/>,
            description: <p> Securing the Integrity of the Development Process and Software Environments through Automating Infrastructure Provisioning and implementing Continous Integration and Deployment. </p>
        },
        {
            skillName: 'Data Engineering',
            themeColor: 'orange',
            svgComponent: <DataEngineeringSVG/>,
            description: <p> Building fault tolerant ETL pipelines for batch processing and data synchronization across services and databases. </p>
        },
        {
            skillName: 'Leadership',
            themeColor: 'blue',
            svgComponent: <LeadershipSVG/>,
            description: <p> I am a PSM 1 certified Scrum Master from Scrum.org. I've led agile teams as an Architect, Technical Lead and Scrum Master. </p>
        }


    ]
}
