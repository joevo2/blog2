import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
// import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

class UterancesComments extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    const anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "joevo2/blog2");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    anchor.appendChild(script);
  }

  render() {
    return (
      <div id="inject-comments-for-uterances"></div>
    );
  }
}

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/blog">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        {/* <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} /> */}
        <UterancesComments />
      </div>
    </div>
  );
};

export default Post;
