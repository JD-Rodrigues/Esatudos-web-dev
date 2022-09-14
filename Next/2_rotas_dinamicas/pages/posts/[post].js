import { getPostsIds } from "../../lib/posts"
import { getPostData } from "../../lib/posts"

export async function getStaticPaths() {
    const paths = getPostsIds() // retorna os nomes dos arquivos sem caracteres especiais, prontos para compor a basename de uma url. Porém, não retorna como uma simples lista, mas na estrutura [{params:{post: string}}, {params:{post: string}},...]
     

    return {
        paths, //[{params:{post: string}},{params:{post: string}}...]
        fallback: false
    }
}

//Esta função será chamada para cada elemento do array "paths", recebendo como argumento um objeto contendo a propriedade "params", que se encontra dentro do objeto que é cada elemento desse array.

export async function getStaticProps({params}){ 
    const dataPost = await getPostData(params.post) //recebe a string com o nome de um arquivo, lê seu conteúdo, parseia com grey-matter e devolve um objeto contendo seus metadados e conteúdo.
    
    return {
        props: {
            dataPost
        }
    }
}


export default function Post({dataPost}){ //recebe a propriedade "props" retornada pela função getStaticProps, que contém uma propriedade (dataPost) cujo valor é o objeto com os dados do post citados no comentário anterior.
    
    return ( 
        <div >
            <h1>{dataPost.data.title}</h1>
            <h6>{dataPost.data.date}</h6>
            <p>{dataPost.content}</p>
        </div>      
    )      
}