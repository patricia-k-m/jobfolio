import { useState } from 'react';
import JobCard from '../components/JobCard';

function Saved() {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Acme Inc',
      location: 'Remote',
      status: 'Saved',
    },
    {
      id: '2',
      title: 'React Engineer',
      company: 'DevOrbit',
      location: 'Europe (Remote)',
      status: 'Saved',
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'Pixel Studio',
      location: 'Zagreb',
      status: 'Saved',
    },
  ]);

  const handleRemove = (id) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <section className="saved-jobs" aria-labelledby="saved-title">
      <h2 id="saved-title" className="saved-heading">
        Saved Jobs
      </h2>

      <div className="job-grid">
        {savedJobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            status={job.status}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </section>
  );
}

export default Saved;
