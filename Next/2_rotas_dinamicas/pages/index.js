import { getSortedPosts } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({allPostsData}) {
  return (
    <div >
     <section>
        <h2>Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  ) 
}

