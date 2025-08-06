import { useState } from 'react';
import { Row, CellFormat } from '../types';

export const useTableFormatting = (initial: Row[]) => {
  const [rows, setRows] = useState<Row[]>(initial);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedCell, setSelectedCell] = useState<{ rowId: number | null; field: string | null }>({
    rowId: null,
    field: null,
  });
  const [highlighted, setHighlighted] = useState<Record<string, string>>({});

  const openMenu = (e: React.MouseEvent, rowId: number, field: string) => {
    setMenuAnchor(e.currentTarget);
    setSelectedCell({ rowId, field });
  };

  const closeMenu = () => {
    setMenuAnchor(null);
    setSelectedCell({ rowId: null, field: null });
  };

  const applyFormat = (key: keyof CellFormat, value: boolean | string) => {
    setRows(prev =>
      prev.map(r =>
        r.id === selectedCell.rowId
          ? {
              ...r,
              format: {
                ...r.format,
                [selectedCell.field!]: {
                  ...r.format?.[selectedCell.field!],
                  [key]: value,
                },
              },
            }
          : r
      )
    );
    closeMenu();
  };

  const applyHighlight = (color: string) => {
    const key = `${selectedCell.rowId}-${selectedCell.field}`;
    setHighlighted(p => {
      const updated = { ...p };
      if (color === 'transparent') {
        delete updated[key];
      } else {
        updated[key] = color;
      }
      return updated;
    });
    closeMenu();
  };

  return {
    rows,
    setRows,
    menuAnchor,
    openMenu,
    closeMenu,
    applyFormat,
    applyHighlight,
    selectedCell,
    highlighted,
  };
};
