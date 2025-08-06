export interface Column {
  name: string;
  key: string;
}

export interface Item {
  product: string;
}

export interface CellFormat {
  bold?: boolean;
  italic?: boolean;
  color?: string;
}

export interface Row extends Item {
  id: number;
  rowIndex: number;
  format: Record<string, CellFormat>;
  [key: string]: string | number | Record<string, CellFormat>;
}
