function Home() {
  return (
    <section className="home-search" aria-labelledby="search-title">
      <h2 id="search-title" className="search-heading">
        Search Jobs
      </h2>
      <p className="search-description">
        Search for remote developer jobs by keyword or tag.
      </p>

      <form className="search-form">
        <input type="text" placeholder="Search by keyword..." />
        <select>
          <option value="">All Tags</option>
          <option value="react">React</option>
          <option value="remote">Remote</option>
          <option value="frontend">Frontend</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Home;
