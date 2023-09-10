import { Typography } from '@mui/material';
import React from 'react';


const GithubMostLanguage = (props: {name: string}) => {

    return (
        <div>

            <iframe
                width="500"
                height="250"
                title="MostUsedLang"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${props.name}&layout=compact`}
            ></iframe>
        </div>

    );
};

export default GithubMostLanguage;
