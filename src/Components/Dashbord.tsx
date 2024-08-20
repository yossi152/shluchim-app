import React, { useState, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider,
  Button,
  useTheme,
  Box,
  Container,
} from '@mui/material';
import { Shliach } from './types';
import ShluchimTable from './ShluchimTable'

const ShluchimDashboard: React.FC = () => {
  const [shluchim, setShluchim] = useState<Shliach[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const theme = useTheme();

  const myTheme = createTheme({
    direction: 'rtl',
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode && {
        background: {
          default: theme.palette.grey[900],
          paper: theme.palette.grey[800],
        },
        text: {
          primary: theme.palette.common.white,
        },
      }),
      ...(! isDarkMode && {
        background: {
          default: theme.palette.grey[100],
          paper: theme.palette.common.white,
        },
        primary: {
          main: theme.palette.grey[700],
        },
      }),
    },
  });

  
  useEffect(() => {
    const IDs = [424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440];
    const APIEndpoint = 'https://sm-dashboard-backend-staging.up.railway.app/api/pub/shluchim/'
    
    const fetchShluchim = async () => {
      const requests = IDs.map((id) => fetch(`${APIEndpoint}${id}`));

      try {
        const responses = await Promise.all(requests);
        const shluchimData = await Promise.all(responses.map((response) => response.json()));

        shluchimData.forEach((data, index) => {
          if (data.shaliach && data.branch) {
            shluchimData[index] = {
              id: IDs[index], // Use the corresponding id from the ids array
              shaliach: data.shaliach,
              branch: data.branch,
            };
          }
        });

        setShluchim(shluchimData);
        setErrorMessage('');
      } catch (error) {
        console.error('Error fetching shluchim data:', error);
        setErrorMessage('Failed to fetch shluchim data. Please try again later.');
      }
    };
    fetchShluchim();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" mb={2}>
          <Button variant='outlined' color='primary' onClick={toggleDarkMode}>
            {isDarkMode ? 'בהיר' : 'כהה'}
          </Button>
        </Box>
        <ShluchimTable shluchimData={shluchim} errorMessage={errorMessage} />
      </Container>
    </ThemeProvider>
  );
};

export default ShluchimDashboard;