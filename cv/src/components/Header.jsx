function Header({ name, job }) {
  return (
    <div className="header">
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}

export default Header;
