import React from 'react';
import { Box, Typography, Paper, Alert } from '@mui/material';

interface ResponseDisplayProps {
  responses: Array<{ type: 'success' | 'error'; message: string }>;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ responses }) => {
  return (
    <Box sx={{ p: 2 }}>
      {responses.map((response, index) => (
        <Paper
          key={index}
          elevation={2}
          sx={{
            p: 2,
            mb: 2,
            borderRadius: 2,
            backgroundColor: response.type === 'success' ? '#e8f5e9' : '#ffebee',
          }}
        >
          <Typography variant="body1">
            {response.message}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};
