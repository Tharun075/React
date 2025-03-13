import { useDispatch, useSelector } from "react-redux"
import { FAILURE, LOADING, SUCCESS } from "../Redux/postReducer"
import { useEffect } from "react"

export const FetchPosts = () => {
  const { posts, loading, error } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(LOADING()) 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts? page=10')
        
        const data = await response.json()
        dispatch(SUCCESS(data)) 
      } catch (error) {
        dispatch(FAILURE(error.message))
      }
    }

    if (!loading) {
      fetchPosts()
    }
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h1>Fetch Posts App</h1>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
