import React from "react";
import nextMdx from "next-mdx";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkRehype from 'remark-rehype'
import Matter from "gray-matter";
import {unified} from "unified";
import Layout from "../../components/layout";

function BlogPostPage(props) {
  return (
    <Layout>
      <div id="post">
        <div id="intro">
            <h1>{props.blog.title}</h1>
            <p>{props.blog.desc}</p>
        </div>
        <section className="container" dangerouslySetInnerHTML={{ __html: props.blog.content }}></section>
      </div>
      <style>{`
          #intro {
              width: 60%;
              margin: 2% 20% 2% 20%;
              float: center;
              align-content: center;
          }

          #intro h1 {
            font-size: 36pt;
        }

          #intro p {
              font-size: 13pt;
              color: #8d8d8d;
              font-weight: 400;
              line-height: 22px;
              letter-spacing: 1px;
          }

          #header {
          }

          #buttonWrapper {
              float: right;
              text-align: right;
          }

          .container {
              width: 60%;
          }
          .container div {
              margin: auto auto 100px auto;
          }
          .container div h2 {
              text-decoration: underline;
              padding-top: 10px;
              padding-bottom: 15px;
          }
          
          @media screen and (max-width:500px){
              .container {
                  grid-template-columns: repeat(1,1fr);
              }
              .w-1,.w-2,.w-3,.w-4,.w-5,.w-6{
                  grid-column:span 1;
              }
          }

          @media (max-device-width : 1080px) {
              #intro {
                  margin: 10%;
                  width: 81.5%;
              }
              #intro h1 {
                  font-size: 24px;
              }
              #intro p {
                  font-size: 12px;
              }

              .button {
                  padding: 4px 4px;
                  transform: translate(0px, -10px);
                  text-align: center;
                  width: 100%;
              }
              
              #pic0 {
                  display: none;
              }
              #pic1 {
                  display: flex;
                  justify-container: center;
                  width: 100%;
                  height: 100%;
                  
                  transform: translate(-1%, 0px);
              }
              #pic2 {
                  display: none;
              }

              .container {
                  width: 81.5%;
              }
              .container div h2 {
                  font-size: 22pt;
              }
          }
      `}</style>
    </Layout>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = Matter(rawContent);

  const result = await unified()
    .use(remarkParse)
    .use(rehypeHighlight)
    .use(remarkMdx)
    .use(remarkHtml)
    .process(content)

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      }
    },
  };
}

export async function getStaticPaths(context) {
  const fs = require("fs");

    const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;