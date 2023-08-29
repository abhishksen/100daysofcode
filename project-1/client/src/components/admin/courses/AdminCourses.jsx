import { Box, Grid, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../xyz/Sidebar'
import Row from '../xyz/Row'

const AdminCourses = () => {

    const users = [
        {
            _id: 1,
            name: 'John Doe',
            email: 'jhon@deo.com',
            role: 'admin',
            subscription: {
                status: 'active',
            },
        },
        {
            _id: 2,
            name: 'John Doe',
            email: 'jhon@deo.com',
            role: 'admin',
            subscription: {
                status: 'active',
            },
        },
    ];

    const updateHandler = (userId) => {
        console.log(userId);
    }

    const deleteButtonHandler = (userId) => {
        console.log(userId);
    }


    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '16']} overflowX={'auto'}>
                <Heading
                    children='All Users'
                    textTransform={'uppercase'}
                    mb={'14'}
                    textAlign={['center', 'left']}
                />
                <TableContainer width={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>All available users</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users.map((item) => (
                                    <Row key={item._id}
                                        item={item} updateHandler={updateHandler}
                                        deleteButtonHandler={deleteButtonHandler} />
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default AdminCourses
