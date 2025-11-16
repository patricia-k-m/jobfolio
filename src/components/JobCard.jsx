function JobCard({ id, title, company, location, status, onRemove }) {
  const statusClass =
    typeof status === 'string' ? status.toLowerCase() : 'unknown';

  const handleRemove = () => {
    if (typeof onRemove === 'function') {
      const confirmed = window.confirm('Remove this job from Saved?');
      if (confirmed) onRemove(id);
    }
  };

  return (
    <article className="job-card" aria-label={`Job at ${company}`}>
      <header className="job-card-header">
        <h3 className="job-title">{title}</h3>
        <span className={`job-status ${statusClass}`}>{status}</span>
      </header>

      <p className="job-company">{company}</p>
      <p className="job-location">
        {location}
        <span className="job-actions">
          <button
            type="button"
            className="job-remove-btn"
            onClick={handleRemove}
          >
            Remove
          </button>
        </span>
      </p>
    </article>
  );
}

export default JobCard;
