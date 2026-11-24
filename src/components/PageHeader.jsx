// A reusable page title block. `lead` is optional: when it is missing, nothing
// is rendered for it (conditional rendering with &&).
function PageHeader({ title, lead }) {
  return (
    <header className="page-header container">
      <h1>{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </header>
  );
}

export default PageHeader;
