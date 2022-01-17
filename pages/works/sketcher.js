import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sketcher">
    <Container>
      <Title>
        Sketcher<Badge>2020</Badge>
      </Title>
      <P>
        A real time sketcher that generates the sketch of video captured 
        by camera in real time. It is implemented to generate both normal 
        sketch and inverted sketch.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/OpenCV-Projects">
          @github/shashanksh2000/OpenCV
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, OpenCV</span>
        </ListItem>
        <ListItem>
          <Meta>Wiki</Meta>
          <Link href="https://en.wikipedia.org/wiki/OpenCV">
            More about OpenCV <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sketcher-1.png" alt="Sketcher" />
      <WorkImage src="/images/works/sketcher.png" alt="Sketcher" />
    </Container>
  </Layout>
)

export default Work
