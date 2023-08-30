import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const VideoCard = ({ title, description, num, lectureId, courseId, deleteButtonHandler }) => {
    return (
        <Stack direction={['column', 'row']}>
            <Box>
                <Heading children={`#${num} ${title}`} />
            </Box>
        </Stack>
    )
}

export default VideoCard
