import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rail Commodity Reservation System">
    <Container>
      <Title>
        Railway Commodity Reservation System<Badge>2021</Badge>
      </Title>
      <P>
        A Railway Commodity Reservation System to handle goods without 
        manual intervention. It allows to reserve a particular amount 
        of space within carriage and generates the final price accordingly.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://railwaycommoditysystem.herokuapp.com/">
            @Railway Commodity Reservation System <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS/iOS/Android </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Firebase, FireStore, HTML/CSS, Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/Railway-Commodity">
          @github/shashanksh2000/Railway-Commodity
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Collaborated With</Meta>
          <Link href="https://github.com/sabhya19">
          @Sabhya Sood / 
          </Link>
          <Link href="https://github.com/pyshx">
          {' '}@Piyush Chauhan
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rail-commodity.png" alt="Railway Commodity" />
      <WorkImage src="/images/works/rcrs-1.png" alt="Railway Commodity" />
      <WorkImage src="/images/works/rcrs-2.png" alt="Railway Commodity" />
      <WorkImage src="/images/works/rcrs-3.png" alt="Railway Commodity" />
    </Container>
  </Layout>
)

export default Work
