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
    <div>
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
          <Link
            key={post.slug}
            className="flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 ">
              <p className="text-gray-400 min-w-48 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-white m-0">
                <span className='font-bold'>{post.metadata.title}</span> <small className='text-xs text-gray-400'>({readingTime(post.content)} min read)</small>
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
