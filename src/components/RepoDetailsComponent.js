import React from 'react';
import { RepoCard } from '.';

const RepoDetailsComponent = ({ repos }) => {
  return (
    <div className='user-detail-wrapper grid-container'>
      {repos.length > 0
        ? repos?.map((repo) => {
            return (
              <RepoCard
                key={repo.id}
                name={repo.name}
                desc={
                  repo.description
                    ? repo.description
                    : 'No description available for this repository'
                }
                tags={repo.topics}
                link={repo.html_url}
              />
            );
          })
        : null}
    </div>
  );
};

export default RepoDetailsComponent;
