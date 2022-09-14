import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');
//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');  
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort(({ date: a }, { date: b }) => {
//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }

// import fs from "fs"
// import path from "path"
// import matter from "gray-matter"

const postsFolderPath = path.join(process.cwd(), "posts")

export function getPostsIds() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"))
  const idsArray = fileNames.map(filename=>{
    return {
      params:{
        post: filename.replace(/\.md$/, "")
      }
    }
  })
 console.log(idsArray)
  return idsArray
}

export async function getSortedPosts() {
  
  const filePostsNames = fs.readdirSync(postsFolderPath)
  const posts = filePostsNames.map(filename=>{
    const id = filename.replace(/\/.md$ /,"")
    const filePath = path.join(postsFolderPath, filename)
    const fileData = fs.readFileSync(filePath, "utf-8")
    const contentFileInObject =  matter(fileData) 
    
    return {
      id,
      ...contentFileInObject.data
    }
 
  })
  return posts.sort((a,b)=>{
    switch (a.date > b.date) {
      case true:
        return 1;
        break;
      case false:
        return -1;
        break
      default:
        break;
    }
  })
}

export function getPostData(id) {
  const pathFile = path.join(process.cwd(), "posts", `${id}.md`)
  const contentFile = fs.readFileSync(pathFile, "utf-8")
  const contentObject = matter(contentFile)

  return {
    ...contentObject
  }
}




