import { Container } from '@gamiui/standard';
import WithLayout from '../src/hocs/WithLayout';
import WithMainLayout from '../src/hocs/WithMainLayout';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return <Container>Home</Container>;
};

export default WithLayout()(WithMainLayout({})(Home));
