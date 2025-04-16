// lib/documentTypes.ts

// Type definition for document type (for better code completion and safety)
export type DocumentType = {
  value: string;
  label: string;
};

// Export all supported document types here!
export const DOCUMENT_TYPES: DocumentType[] = [
  { value: "sale_deed",           label: "Sale Deed" },
  { value: "lease_deed",          label: "Lease Deed" },
  { value: "gift_deed",           label: "Gift Deed" },
  { value: "power_of_attorney",   label: "Power of Attorney" },
  { value: "mortgage_deed",       label: "Mortgage Deed" },
  { value: "partition_deed",      label: "Partition Deed" },
  { value: "settlement_deed",     label: "Settlement Deed" },
  { value: "relinquishment_deed", label: "Relinquishment Deed" },
  { value: "transfer_deed",       label: "Transfer Deed" },
  { value: "will",                label: "Will" },
  { value: "exchange_deed",       label: "Exchange Deed" },
  { value: "trust_deed",          label: "Trust Deed" },
  // Add more types as needed
];