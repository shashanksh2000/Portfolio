import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Share Camps">
    <Container>
      <Title>
        Share Camps<Badge>2019</Badge>
      </Title>
      <P>
        A web app platform for users to share their campgrounds, set 
        its price and others can provide relevant reviews on that 
        according to their experiences.
      </P>
      <List ml={4} my={4}>
      {/*<ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            @Share Camps (Unavailable) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>*/}
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS/iOS/Android </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express.js, MongoDB, HTML/CSS, Bootstrap, Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/ShareCamps">
          @github/shashanksh2000/ShareCamps
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sharecamps.png" alt="Share Camps" />
      <WorkImage src="/images/works/sharecamps-1.png" alt="Share Camps" />
      <WorkImage src="/images/works/sharecamps-2.png" alt="Share Camps" />
    </Container>
  </Layout>
)

export default Work
