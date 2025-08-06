import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Row } from '../types';

interface Props extends GridRenderCellParams {
  onOpenMenu: (e: React.MouseEvent, rowId: number, field: string) => void;
  highlighted: Record<string, string>;
}

export default function CellFormatter(props: Props) {
  const { id, field, value, row, onOpenMenu, highlighted } = props;
  const format = (row as Row)?.format?.[field] || {};
  const key = `${id}-${field}`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Typography
        style={{
          flexGrow: 1,
          fontWeight: format.bold ? 'bold' : 'normal',
          fontStyle: format.italic ? 'italic' : 'normal',
          color: format.color || 'inherit',
          background: highlighted[key] || 'transparent',
        }}
      >
        {value}
      </Typography>
      <IconButton size="small" onClick={(e) => onOpenMenu(e, Number(id), field)}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
