import { Paragraph } from '../components/layout/Paragraph';
import { createElement } from 'react';
import rehype from 'rehype-react';
import remark_parse from 'remark-parse';
import remark_rehype from 'remark-rehype';
import { unified } from 'unified';

const processor = unified()
  .use(remark_parse)
  .use(remark_rehype)
  .use(rehype, {
    createElement: createElement,
    components: {
      p: Paragraph,
    },
  });

export function processRawContent(content: string) {
  const result = processor.processSync(content);
  return result.result;
}
