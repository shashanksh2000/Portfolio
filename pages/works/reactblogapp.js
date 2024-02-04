import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="React Blog App">
    <Container>
      <Title>
        React Blog App<Badge>2020</Badge>
      </Title>
      <P>
        A react based online content sharing system which enables multi-user blogs 
        with author entries to share different views and thoughts on diverse topics.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-blogg-app.vercel.app/">
            @Share Blogs <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/macOS/iOS/Android </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/shashanksh2000/React-blog-app">
          @github/shashanksh2000/React-Blog-App
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blog-app.png" alt="Blog-App" />
      <WorkImage src="/images/works/blog-app-1.png" alt="Blog-App" />
      <WorkImage src="/images/works/blog-app-2.png" alt="Blog-App" />
      <WorkImage src="/images/works/blog-app-3.png" alt="Blog-App" />
      <WorkImage src="/images/works/blog-app-4.png" alt="Blog-App" />
    </Container>
  </Layout>
)

export default Work
