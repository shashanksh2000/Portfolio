import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chip8">
    <Container>
      <Title>
        Chip 8 Emulator<Badge>2021</Badge>
      </Title>
      <P>
        A simple C++ based Chip 8 Emulator, capable of executing chip 8 roms 
        including programs, games and display samples designed for chip 8. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/Chip8-Emulator">
          @github/shashanksh2000/Chip8-Emulator
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, CMake, SDL2</span>
        </ListItem>
        <ListItem>
          <Meta>Wiki</Meta>
          <Link href="https://en.wikipedia.org/wiki/CHIP-8">
            More about Chip-8 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chip8-thumb.png" alt="Chip-8" />
      <WorkImage src="/images/works/chip8-1.png" alt="Chip-8" />
      <WorkImage src="/images/works/chip8-2.png" alt="Chip-8" />
      <WorkImage src="/images/works/chip8-3.png" alt="Chip-8" />
      <WorkImage src="/images/works/chip8-4.png" alt="Chip-8" />
    </Container>
  </Layout>
)

export default Work
