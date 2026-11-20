"use client";

export default function PrintButton() {
  return (
    <button type="button" className="btn btn-dark btn-sm no-print" onClick={() => window.print()}>
      download as pdf
    </button>
  );
}
