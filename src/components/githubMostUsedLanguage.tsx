import { Typography } from '@mui/material';
import React from 'react';


const GithubMostLanguage: React.FC = () => {

    const user_name = "Sea10wood"; // GitHubのユーザー名をここに指定

    return (
        <div>

            <iframe
                width="500"
                height="250"
                title="MostUsedLang"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user_name}&layout=compact`}
            ></iframe>
        </div>

    );
};

export default GithubMostLanguage;
