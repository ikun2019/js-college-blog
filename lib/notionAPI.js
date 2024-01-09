import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const ntm = new NotionToMarkdown({ notionClient: notion });

// @global getAllPosts
export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 100,
  });

  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getMetaData(post);
  });
};

// * サイトのメタデータ取得のためのメソッド
const getMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };

  return {
    title: post.properties.Title.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    image: post.properties.Image.files[0].file.url,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
  }
};

// @global getSinglePost
export const getSinglePost = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        }
      }
    }
  });

  const page = response.results[0];
  const metadata = getMetaData(page);

  const mdBlocks = await ntm.pageToMarkdown(page.id);
  const mdString = ntm.toMarkdownString(mdBlocks);

  return {
    metadata,
    markdown: mdString,
  }
};