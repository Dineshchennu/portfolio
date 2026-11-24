import { profile, receiptLines } from "../data/resume";

// A skills summary styled as a till receipt, a nod to the billing, payment and
// e-commerce systems in the résumé. It only displays data, so it needs no state.
function Receipt() {
  return (
    <aside className="receipt" aria-label="Summary of skills">
      <div className="receipt-paper">
        <p className="receipt-name">{profile.name}</p>
        <p className="receipt-sub">{profile.title}</p>
        <p className="receipt-sub">{profile.location}</p>

        <hr className="receipt-rule" />

        <dl className="receipt-lines">
          {receiptLines.map((line) => (
            <div key={line.label} className="receipt-line">
              <dt>{line.label}</dt>
              <span className="receipt-leader" aria-hidden="true" />
              <dd>{line.value}</dd>
            </div>
          ))}
        </dl>

        <hr className="receipt-rule" />

        <p className="receipt-total">
          <span>Experience</span>
          <span>{profile.yearsOfExperience} years</span>
        </p>

        <div className="receipt-barcode" aria-hidden="true" />
        <p className="receipt-thanks">Thank you for visiting</p>
      </div>
    </aside>
  );
}

export default Receipt;
