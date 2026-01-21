export interface Quotation {
  text: string;
  attribution: string;
}

export interface QuotationWithId extends Quotation {
  id: number;
}
