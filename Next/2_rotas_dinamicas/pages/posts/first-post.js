// import { getSortedPostsData } from '../../lib/posts';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


// export default function Posts({allPostsData}) {
//     return  (
//     <section>
//         <h2>Blog</h2>
//         <ul >
//         {allPostsData.map(({ id, date, title }) => (
//             <li key={id}>
//             {title}
//             <br />
//             {id}
//             <br />
//             {date}
//             </li>
//         ))}
//         </ul>
//   </section>
//     )
// }  

import { getSortedPosts } from "../../lib/posts";

export async function getStaticProps() {
    const posts = await getSortedPosts() // retorna um array de objetos, cada um deles possui o conteúdo e os metadados de um post
    
    return {
        props:{
            posts //[{id:string, title:string, date:string}]
        }
    }
}

export default function FirstPost({posts}){ //recebe a propriedade "props", retornada pela função "getStaticProps"
    
    return (
        // <h1>{posts[0].title}</h1> 
        posts.map(post=>{
            return (
                <>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h1>{post.date}</h1>
                    <hr></hr>
                </>   
            )            
        })
    )
}