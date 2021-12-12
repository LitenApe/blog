import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormEvent, useEffect, useState } from 'react';

import { Page } from '../../types/page';
import { Page as PageWrapper } from '../../components/layout/Page';
import { Paragraph } from '../../components/layout/Paragraph';
import { Post } from '../../components/layout/Post';
import { getAllThoughts } from '../../utils/getPages';

interface Props {
  readonly posts: Array<Page>;
}

export default function Overview(props: Props): JSX.Element {
  const { posts } = props;
  const [categories, setCategories] = useState<Record<string, number>>({});
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    posts.map(({ frontmatter }) => {
      frontmatter.categories.map((category) => {
        const exist = categories.hasOwnProperty(category);
        setCategories((prev) => ({
          ...prev,
          [category]: exist ? prev[category] + 1 : 1,
        }));
      });
    });
  }, []);

  function toggleFilter(event: FormEvent<HTMLInputElement>) {
    const { checked, value } = event.currentTarget;
    if (checked) {
      setFilter(() => value);
    } else {
      setFilter(() => null);
    }
  }

  let filteredPosts = posts;

  if (filter !== null) {
    filteredPosts = posts.filter(
      (post) => post.frontmatter.categories.indexOf(filter) !== -1
    );
  }

  return (
    <PageWrapper title="Latest writings" heading="My thoughts on everything">
      <Paragraph>
        Below you will find a collection of my thoughts on everything. Use the
        filters to quickly find content which might interest you 🙂.
      </Paragraph>
      <CheckboxGroup>
        {Object.entries(categories).map(([category, instances]) => (
          <Checkbox
            key={`thought-category-${category}`}
            value={category}
            isChecked={filter === category}
            onChange={toggleFilter}
          >{`${category} ${instances}`}</Checkbox>
        ))}
      </CheckboxGroup>
      {filteredPosts.map((post) => (
        <Post
          key={`thought-post-${post.created_at}`}
          slug={post.slug}
          {...post.frontmatter}
        />
      ))}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllThoughts(),
    },
  };
}
