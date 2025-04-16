// pages/yourFormPage.tsx

import React, { useState } from "react";
import { DocumentTypeSelect } from "../components/DocumentTypeSelect";

export default function YourFormPage() {
  const [documentType, setDocumentType] = useState("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!documentType) {
      setError("Please select a document type.");
      return;
    }
    // ...submit the form
    alert(`Selected document type: ${documentType}`);
    setError(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
      <DocumentTypeSelect
        value={documentType}
        onChange={(e) => setDocumentType(e.target.value)}
        error={error}
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Generate Document
      </button>
    </form>
  );
}