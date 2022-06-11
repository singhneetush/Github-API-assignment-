const RepoCard = ({ name, desc, tags }) => {
  return (
    <div className='grid-item'>
      <h2 className='repo-name'>{name}</h2>

      <p
        className={
          desc === 'No description available for this repository'
            ? 'no-desc'
            : 'repo-desc'
        }>
        {desc}
      </p>
      {tags.length === 0 ? (
        <p className='no-tags'>
          there are no tags available for this respository
        </p>
      ) : (
        tags.map((tag) => (
          <span className='repo-tag' key={Math.random()}>
            {tag}
          </span>
        ))
      )}
    </div>
  );
};

export default RepoCard;
