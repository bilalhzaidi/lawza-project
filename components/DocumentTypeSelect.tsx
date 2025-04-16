// components/DocumentTypeSelect.tsx

import React from "react";
import { DOCUMENT_TYPES } from "../lib/documentTypes";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

export const DocumentTypeSelect: React.FC<Props> = ({ value, onChange, error }) => (
  <div className="mb-4">
    <label
      htmlFor="documentType"
      className="block text-sm font-medium text-gray-700"
    >
      Document Type <span className="text-red-500">*</span>
    </label>
    <select
      id="documentType"
      name="documentType"
      value={value}
      onChange={onChange}
      required
      className={`mt-1 block w-full px-3 py-2 border ${
        error
          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      } rounded-md shadow-sm`}
    >
      <option value="">-- Select Document Type --</option>
      {DOCUMENT_TYPES.map((doc) => (
        <option key={doc.value} value={doc.value}>
          {doc.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="mt-2 text-sm text-red-600" id="documentType-error">
        {error}
      </p>
    )}
  </div>
);