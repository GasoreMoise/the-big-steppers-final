import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();  // Gets the post ID from the URL

  // You would fetch post data based on the id
  const post = {
    title: `Post Title ${id}`,
    content: `Full content for post ${id}.`
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{post.title}</h2>
        <p className="text-lg text-gray-600">{post.content}</p>
      </div>
    </section>
  );
};


export default Post;
