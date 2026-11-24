import { useRef, useState } from "react";
import { profile } from "../data/resume";
import PageHeader from "../components/PageHeader";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Write at least 10 characters so I know what you need.";
  }
  return errors;
}

function Contact() {
  // CONCEPT: a controlled form. React state is the single source of truth
  // for what is in each input.
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // CONCEPT: useRef gives direct access to a DOM element. We keep a ref to the
  // <form> so that, after a failed submit, we can move focus to the first
  // field with an error (form.elements.name, form.elements.email, ...).
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    const found = validate(values);
    setErrors(found);

    const firstInvalid = ["name", "email", "message"].find((field) => found[field]);
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    // This site has no server, so the message opens in the visitor's email app.
    const subject = encodeURIComponent(`Message from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        title="Contact"
        lead="Tell me about your project. Your message opens in your email app, ready to send."
      />

      <section className="container section contact-layout">
        <form className="form" ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="button button-primary">
            Send message
          </button>

          {sent && (
            <p className="form-note" role="status">
              Your email app should open with the message ready to send. If it
              doesn&apos;t, write to {profile.email}.
            </p>
          )}
        </form>

        <aside className="contact-details">
          <h2>Or reach me directly</h2>
          <dl className="ledger">
            <div className="ledger-row">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div className="ledger-row">
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </dd>
            </div>
            <div className="ledger-row">
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  dinesh-chennu-7313571a8
                </a>
              </dd>
            </div>
            <div className="ledger-row">
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}

export default Contact;
