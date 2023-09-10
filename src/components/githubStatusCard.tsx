import React from 'react';

const GitHubStatsCard = (props: {name: string}) => {
    return (

        <div>
            <iframe
                src={`https://github-readme-stats.vercel.app/api?username=${props.name}`}
                width="500"
                height="250"
                title="GitHub Stats"
            ></iframe>
        </div>
    );
};

export default GitHubStatsCard;
