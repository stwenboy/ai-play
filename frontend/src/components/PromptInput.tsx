import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

interface PromptInputProps {
  onSend: (prompt: string) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({ onSend }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSend(prompt);
      setPrompt('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, p: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter your development task..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<SendIcon />}
        sx={{ height: '100%' }}
      >
        Submit
      </Button>
    </Box>
  );
};
