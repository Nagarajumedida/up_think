
import { AddIcon, LinkIcon } from '@chakra-ui/icons';
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Badge, Box, Spacer, Flex, Image } from '@chakra-ui/react';



import './App.css';


function App() {
  return (
    <div className='container'>

      <div className='container1'>
        {/* first div */}
        <Flex className='con1'>
          <Box p='10' fw="bold" className="container3">
            <h2 >Assignment1</h2>
          </Box>
          <Spacer />
          <Box p='10' >
            <Badge variant='solid' colorScheme='green' mr="2">
            <LinkIcon fw="bold" /> Invitelink
            </Badge>
            
            <Badge variant='solid' colorScheme='green'>
            <AddIcon boxSize={2} /> Add student
            </Badge>
          </Box>
        </Flex>


        <Flex w="80%" size="sm" className="container3">
          <Box p='10' >
            <h1 >2</h1>
            <p>ACTIVE STUDENTS</p>
          </Box>

          <Box p='10'>
            <h1>2</h1>
            <p>SUBMISSIONS</p>
          </Box>
        </Flex>

        <Flex   className="container3" p="20">
          <Box boxSize='sm' >
             <h2 >Submitted Activitie v/s Pending Submissions</h2>
            <Image src='https://images7.memedroid.com/images/UPLOADED370/5fe1f6a9beee2.jpeg'  />
          </Box>

          <Box boxSize='sm'>
          <h2>Day wise Submissioms</h2>
            <Image src='https://images7.memedroid.com/images/UPLOADED370/5fe1f6a9beee2.jpeg' />
          </Box>
        </Flex>

      
        {/* 4th div */}
        <div className='table'>
          <h1 style={{ padding: "50px", fontSize: "25px", fontWeight: "bold" }}>Active Students</h1>
          <TableContainer >
            <Table size='sm' border="1px solid black">
              <thead style={{ fontWeight: "bold", textAlign: "center" }} border="1px solid black">
                <Tr textAlign="center">
                  <Td>Name</Td>
                  <Td>Last Activity</Td>
                  <Td>Sessions</Td>
                  <Td>Words</Td>
                  <Td>Submission Data</Td>
                  <Td>Type ID</Td>
                  <Td>CB</Td>
                </Tr>
              </thead>
              <Tbody>
                <Tr>
                  <Td>Taceveg 653</Td>
                  <Td>12 hours ago</Td>
                  <Td>7</Td>
                  <Td>65</Td>
                  <Td>12 hours ago</Td>
                  <Td>100%</Td>
                  <Td>100%</Td>
                </Tr>
                <Tr>
                  <Td>Will Kinsman</Td>
                  <Td>12 hours ago</Td>
                  <Td>7</Td>
                  <Td>65</Td>
                  <Td>12 hours ago</Td>
                  <Td>100%</Td>
                  <Td>100%</Td>
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>
        </div>

        <div >
          <h1 style={{ padding: "30px", fontSize: "25px", fontWeight: "bold" }}>Submissions</h1>
          <TableContainer border="1px solid black">
            <Table size='sm'>
              <thead style={{ fontWeight: "bold", textAlign: "center" }} border="1px solid black">
                <Tr>
                  <Td>Name</Td>
                  <Td>Submission Status</Td>
                  <Td>Grading Status</Td>

                  <Td>Submission Date</Td>
                  <Td>Actions</Td>

                </Tr>
              </thead>
              <Tbody>
                <Tr>
                  <Td >Will Kinsman</Td>
                  <Td bg="green" color="white">Submited</Td>
                  <Td bg="grey">Pending</Td>
                  <Td>a month ago</Td>
                  <Td>
                    <div>
                      <Badge colorScheme='green'>Download Keylogs</Badge>
                      <Badge colorScheme='purple'>Show Submissions</Badge>
                    </div>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Taceveg 653</Td>
                  <Td bg="green" color="white">Submited</Td>
                  <Td bg="grey">Pending</Td>
                  <Td>a month ago</Td>
                  <Td>
                    <div>
                      <Badge colorScheme='green'>Download Keylogs</Badge>
                      <Badge colorScheme='purple'>Show Submissions</Badge>
                    </div>

                  </Td>

                </Tr>
              </Tbody>

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>



  );
}

export default App;
