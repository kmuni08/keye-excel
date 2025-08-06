import { Menu, MenuItem } from '@mui/material';

interface Props {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onFormat: (key: any, v: any) => void;
  onHighlight: (c: string) => void;
}

export default function FormatMenu({ anchorEl, onClose, onFormat, onHighlight }: Props) {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <MenuItem onClick={() => onFormat('bold', true)}>Bold</MenuItem>
      <MenuItem onClick={() => onFormat('bold', false)}>Reset Bold</MenuItem>
      <MenuItem onClick={() => onFormat('italic', true)}>Italic</MenuItem>
      <MenuItem onClick={() => onFormat('italic', false)}>Reset Italic</MenuItem>
      <MenuItem onClick={() => onHighlight('yellow')}>Yellow</MenuItem>
      <MenuItem onClick={() => onHighlight('lightgreen')}>Light Green</MenuItem>
      <MenuItem onClick={() => onHighlight('lightblue')}>Light Blue</MenuItem>
      <MenuItem onClick={() => onHighlight('pink')}>Pink</MenuItem>
      <MenuItem onClick={() => onHighlight('transparent')}>Clear Highlight</MenuItem>
    </Menu>
  );
}
