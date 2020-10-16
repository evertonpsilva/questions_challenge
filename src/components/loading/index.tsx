import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading: React.FC = () => {

    return (
        <Box>
            <CircularProgress></CircularProgress>
        </Box>
    );

};

export default Loading;