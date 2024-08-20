import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { Shliach } from './types';

const ShluchimTable: React.FC<{shluchimData: Shliach[]; errorMessage?: string}> = ({ shluchimData, errorMessage }) => {
    return (
      <TableContainer component={Paper}>
        {errorMessage ? (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        ) : (
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align='right'>ID</TableCell>
                <TableCell align='right'>שם</TableCell>
                <TableCell align='right'>סניף</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shluchimData.map((shliach: Shliach) => (
                <TableRow key={shliach.id}>
                  <TableCell align='right'>{shliach.id}</TableCell>
                  <TableCell align='right'>{shliach.shaliach}</TableCell>
                  <TableCell align='right'>{shliach.branch}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    );
  };

  export default ShluchimTable