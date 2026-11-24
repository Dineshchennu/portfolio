// Some résumé bullets start with a short label, e.g.
// "Code Refactoring: Refactored user handling by ...".
// This splits them so the label can be shown separately from the sentence.
export default function splitHighlight(text) {
  const index = text.indexOf(": ");
  if (index > 0 && index < 60) {
    return { label: text.slice(0, index), body: text.slice(index + 2) };
  }
  return { label: null, body: text };
}
