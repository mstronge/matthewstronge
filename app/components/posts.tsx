import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

function readingTime(str) { 

  // Calculate the estimated reading time
  const wordsPerMinute = 200;
  const wordCount = str.split(" ").length;  
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;

}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-4 flex flex-col">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug} >
            <Link
              prefetch
              className="font-bold"
              href={`/blog/${post.slug}`}
            >
              {post.metadata.title}
            </Link><br />
                <small className='text-xs text-gray-400'>posted on {formatDate(post.metadata.publishedAt, false)} | ({readingTime(post.content)} min read)</small>
          </div>
        ))}
    </div>
  )
}
