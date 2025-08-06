import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTableFormatting } from '../hooks/useTableFormatting.ts';
import { Column, Item, Row } from '../types.ts';
import CellFormatter from './CellFormatter.tsx';
import FormatMenu from './FormatMenu.tsx';
import raw from '../data.json'; // move data into its own file

const createRows = (items: Item[]): Row[] =>
  items.map((i, idx) => ({ ...i, id: idx + 1, rowIndex: idx + 1, format: {} }));

export default function Spreadsheet() {
  const initialRows = React.useMemo(() => createRows(raw.Values.items), []);
  const {
    rows,
    setRows,
    menuAnchor,
    openMenu,
    closeMenu,
    applyFormat,
    applyHighlight,
    highlighted,
  } = useTableFormatting(initialRows);

  const columns: GridColDef[] = React.useMemo(() => {
    const base: GridColDef[] = [
      { field: 'rowIndex', headerName: '#', width: 50, editable: false },
    ];

    const dynamic: GridColDef[] = raw.Values.columns.map((col: Column) => ({
      field: col.key,
      headerName: col.name,
      width: col.key === 'product' ? 250 : 200,
      editable: true,
      renderCell: (params) => (
        <CellFormatter {...params} onOpenMenu={openMenu} highlighted={highlighted} />
      ),
    }));

    return [...base, ...dynamic];
  }, [highlighted]);

  const handleUpdate = async (r: any) => {
    setRows(prev => prev.map(x => (x.id === r.id ? r : x)));
    return r;
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(r) => r.id}
        processRowUpdate={handleUpdate}
        editMode="cell"
        paginationModel={{ page: 0, pageSize: 10 }}
      />

      <FormatMenu
        anchorEl={menuAnchor}
        onClose={closeMenu}
        onFormat={applyFormat}
        onHighlight={applyHighlight}
      />
    </div>
  );
}
