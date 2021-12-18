import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/layout';

import { Image } from '@chakra-ui/image';
import { Paragraph } from '../components/layout/Paragraph';
import { Quote } from '../components/layout/Quote';
import { createElement } from 'react';
import rehype from 'rehype-react';
import remark_parse from 'remark-parse';
import remark_rehype from 'remark-rehype';
import remark_unwrap_images from 'remark-unwrap-images';
import { unified } from 'unified';

const processor = unified()
  .use(remark_parse)
  .use(remark_unwrap_images)
  .use(remark_rehype)
  .use(rehype, {
    createElement: createElement,
    components: {
      h1: (props) =>
        createElement(Heading, { ...props, as: 'h1', size: '2xl', my: 6 }),
      h2: (props) =>
        createElement(Heading, { ...props, as: 'h2', size: 'xl', my: 4 }),
      h3: (props) =>
        createElement(Heading, { ...props, as: 'h3', size: 'lg', my: 4 }),
      h4: (props) =>
        createElement(Heading, { ...props, as: 'h4', size: 'md', my: 4 }),
      h5: (props) =>
        createElement(Heading, { ...props, as: 'h5', size: 'sm', my: 4 }),
      p: Paragraph,
      a: (props) =>
        createElement(Link, { ...props, textDecoration: 'underline' }),
      ul: UnorderedList,
      ol: OrderedList,
      li: ListItem,
      blockquote: Quote,
      img: Image,
    },
  });

export function processRawContent(content: string) {
  const result = processor.processSync(content);
  return result.result;
}
