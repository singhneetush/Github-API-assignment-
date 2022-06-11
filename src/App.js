import { useState, useEffect } from 'react';
import {
  UserDetailsComponent,
  RepoDetailsComponent,
  PaginationComponent,
  Loader,
} from './components';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repos, setRepos] = useState();
  const [page, setPage] = useState(4);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState('singhneetush');
  useEffect(() => {
    fetch(`https://api.github.com/users/${query}`, {
      // headers: {
      //   Authorization: 'token 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',
      // },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoadingUser(false);
        if (res.message === 'Not Found') {
          setNotFound(true);
        }
      })
      .catch((error) => console.log(error.message));
  }, [query]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${query}/repos?per_page=6&page=${page}`)
      .then(async (response) => {
        const data = await response.json();
        if (data) {
          setRepos(data);
          setLoadingRepos(false);
        }
      })
      .catch((error) => console.log(error));
  }, [query, page]);

  if (notFound) {
    return <Loader text='User not found!' />;
  }

  return (
    <div className='app'>
      {loadingUser ? (
        <Loader text='Loading User, please wait!' />
      ) : (
        <UserDetailsComponent
          avatarURL={data.avatar_url}
          link={data.html_url}
          name={data.name}
          bio={data.bio}
          location={data.location}
          twitter={data.twitter_username ? data.twitter_username : 'not found'}
          query={query}
          setQuery={setQuery}
          setPage={setPage}
        />
      )}
      {repos?.length > 0 ? (
        loadingRepos ? (
          <Loader text='Loading Repositories, please wait' />
        ) : (
          <RepoDetailsComponent repos={repos} />
        )
      ) : (
        <Loader text='No repositories found' />
      )}
      <PaginationComponent page={page} setPage={setPage} />
    </div>
  );
}

export default App;
