import html from 'remark-html';
import { remark } from 'remark';

export async function processRawContent(content: string) {
  const result = await remark().use(html).process(content);
  return result.value;
}
