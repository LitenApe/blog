import { Box, ListItem, UnorderedList } from '@chakra-ui/layout';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { FormEvent, useEffect, useState } from 'react';

import { Page } from '../../types/page';
import { Page as PageWrapper } from '../../components/layout/Page';
import { Paragraph } from '../../components/layout/Paragraph';
import { Post } from '../../components/layout/Post';
import { Quote } from '../../components/layout/Quote';
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
      <Quote author="Mary Jean LeTendre">
        Let us never confuse stability with stagnation
      </Quote>
      <Paragraph>
        As a developer, as a person in a quickly moving field, such as
        technology, my biggest fear is stagnation. There is nothing more
        terrifying to me then the thought that I can't improve, that I have
        peaked. That thought og never being able to accomplish anything more
        then what I have now, is scary.
      </Paragraph>

      <Paragraph>
        This site was created as a way to combat those thoughts, a place for
        reflections. A simple collection of my thoughts throughout time to
        improve the visibility of my everchanging mind. A place to prove to
        myself that I am still improving.
      </Paragraph>

      <Paragraph>
        The most correct definition for this site would probably we a diary.
        However, this will be a collection of those diary entries which I think
        has some value, which might do some good outside of my head.
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
      <UnorderedList styleType="none" ml={0}>
        {filteredPosts.map((post) => (
          <ListItem key={`thought-post-${post.created_at}`} mt={4}>
            <Post {...post} />
          </ListItem>
        ))}
      </UnorderedList>
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
