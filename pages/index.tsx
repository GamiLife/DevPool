import type { NextPage } from 'next';
import Topics from '../src/components/Topics';
import WithLayout from '../src/hocs/WithLayout';
import WithMainLayout from '../src/hocs/WithMainLayout';

const Home: NextPage = () => {
  return <Topics />;
};

export default WithLayout()(WithMainLayout({})(Home));
