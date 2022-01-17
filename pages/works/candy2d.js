import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Candy2D">
    <Container>
      <Title>
        Candy 2D Game Engine<Badge>2020 - </Badge>
      </Title>
      <P>
        Candy 2D is primarily an early-stage interactive application and 
        rendering engine for Windows. Currently not much is implemented, 
        however (almost) everything inside this repository is being created 
        and updated to render good quality 2D games.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Yash-Punia/Candy2D">
          @github/Currently Private Repository
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, Glad, GLFW, imgui, spdlog, Premake5</span>
        </ListItem>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="https://github.com/Yash-Punia">
          @Yash Punia 
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/candy2d.png" alt="Candy2D" />
    </Container>
  </Layout>
)

export default Work
