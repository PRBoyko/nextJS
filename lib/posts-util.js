import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postDirectory = path.join(process.cwd(), 'content', 'posts');

function getFiles(){
    return fs.readdirSync(postDirectory);
}

function getAllPosts() {
    const files = getFiles();

    return files.map(file => getPostData(file))
}

export function getPostData(file) {
    const postSlug = file.replace(/.md$/, '');
    const filePath = path.join(postDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const result = matter(fileContent);
        
    const post = { slug: postSlug, ...result.data, content:result.content }
       // console.log(post)
    return post
}

function getFeaturedPosts() {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured)
}

export { getAllPosts, getFeaturedPosts, getFiles };

