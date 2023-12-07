import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const API = 'http://localhost:3001';
      const jobs = await axios.get(`${API}/jobs`);
      setJobs(jobs.data);
    }
    getJobs();
  }, []);

  return (
    <>
      {jobs.map(job => (
        <div key={job.url}>
          <h3>Vault Tec</h3>
          <h2><a href={job.url}>{job.name}</a></h2>
          <code>{parse(parse(job.description))}</code>
          <p>{job.location}</p>
        </div>
      ))}
    </>
  )
}

export default Jobs;
