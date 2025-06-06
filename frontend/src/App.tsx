import React, { useState } from 'react';
import { Box, Container, Typography, CssBaseline } from '@mui/material';
import { PromptInput } from './components/PromptInput';
import { ResponseDisplay } from './components/ResponseDisplay';
import axios from 'axios';

function App() {
  const [responses, setResponses] = useState<Array<{ type: 'success' | 'error'; message: string }>>([]);

  const handleSendPrompt = async (prompt: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/generate', { prompt });
      setResponses(prev => [...prev, { type: 'success', message: response.data.code }]);
    } catch (error) {
      console.error('Error:', error);
      setResponses(prev => [...prev, { type: 'error', message: 'Failed to generate code' }]);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Box component="header" sx={{ p: 2, bgcolor: 'primary.main' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" color="white">
            AI Development Assistant
          </Typography>
        </Container>
      </Box>
      <Box component="main" sx={{ flex: 1, bgcolor: 'background.default' }}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <PromptInput onSend={handleSendPrompt} />
          <ResponseDisplay responses={responses} />
        </Container>
      </Box>
      <Box component="footer" sx={{ p: 2, bgcolor: 'primary.light' }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary">
            Powered by AI and MCP
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
