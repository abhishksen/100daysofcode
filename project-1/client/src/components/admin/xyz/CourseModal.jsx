import { Box, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import VideoCard from './VideoCard';

const CourseModal = ({ isOpen, onClose, id }) => {
    const courseTitle = "React Course";
    return (
        <Modal isOpen={isOpen} size={'full'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{courseTitle}</ModalHeader>
                <ModalCloseButton />

                <ModalBody p={'10'}>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '10']}>
                            <Box my={'4'}>
                                <Heading children={courseTitle} size={'lg'} />
                                <Heading children={`#${id}`} size={'sm'} opacity={'0.5'} />
                            </Box>
                            <Heading children='Lectures' size={'md'} />
                            <VideoCard />
                        </Box>

                    </Grid>

                </ModalBody>

            </ModalContent>

        </Modal>
    )
}

export default CourseModal
