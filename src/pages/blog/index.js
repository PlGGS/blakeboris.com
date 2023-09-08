import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";

function Index(props) {
  return (
    <Layout>
      <div className="container">
        <div className="centered-list">
          <h1>Blog Posts</h1>
          <br/>
          <ul>
            {props.blogs.map((blog, idx) => {
              return (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>{blog.title} · {blog.date}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 80px;
          }
          .centered-list {
            float: center;
            align-content: center;
          }

          .centered-list h1 {
            // position: relative;
            text-align: center;
            // left: -70px;
          }

          .centered-list ul {
            position: relative;
            left: -10px;
            font-size: 20pt;
          }

          .centered-list ul li {
            padding-bottom: 8px;
          }

          @media (max-device-width : 1080px) {
              .centered-list {
                margin: 10%;
                width: 81.5%;
              }
              .centered-list h1 {
                font-size: 24px;
              }
              .centered-list p {
                font-size: 12px;
              }
          }
      `}</style>
    </Layout>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
}

export default Index;
