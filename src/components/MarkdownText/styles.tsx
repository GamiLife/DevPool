import styled from '@emotion/styled';
import { Container, defaultTheme } from '@gamiui/standard';

export const MarkdownTextContainer = styled(Container)`
  line-height: 1.7em;

  strong {
    border-radius: 0.2em;
    background-color: #adadad;
    color: white;
    padding: 0 6px;
  }

  h1 {
    font-weight: 600;
    color: black;
  }

  h2 {
    margin: 1rem auto;
    font-weight: 600;
    color: ${defaultTheme.light.primary.mediumPurple};
  }
`;
