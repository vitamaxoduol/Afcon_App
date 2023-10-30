import axios from "axios"
import CommentCard from "../../CommentCard"
import { useEffect, useState } from "react"
import { useMyCustomHook } from "../../Context/AppContext"
// import { toast } from "react-toastify"

const Comments = ({ handleClose3 }) => {
  const { API_URL, LOGGED_IN_USER_ID } = useMyCustomHook();
  console.log(LOGGED_IN_USER_ID);

  const [comments, setComments] = useState([]);
  const [typedComment, setTypedComment] = useState("");
  const [refreshComments, setRefreshComments] = useState(true);

  useEffect(() => {
    if (refreshComments) {
      axios.get(`${API_URL}https://afcona-app.onrender.com/api/comments`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          // Handle error (e.g. alert or toast)
        });
      setRefreshComments(false);
    }
  }, [API_URL, refreshComments]);

  const handleDelete = (e, ID) => {
    e.preventDefault();
    axios.delete(`${API_URL}/api/comments/${ID}`)
      .then(response => {
        alert("Deleted successfully!");
        setRefreshComments(true);
      })
      .catch(error => {
        alert("Delete failed!!");
      })
  };

  const submitComment = (e) => {
    e.preventDefault();

    if (!LOGGED_IN_USER_ID) {
      alert("User not logged in!");
      return;
    }

    const SUBMITTED_COMMENT = {
      content: typedComment,
      user_id: LOGGED_IN_USER_ID,
    };

    axios.post(`${API_URL}/api/comments`, SUBMITTED_COMMENT)
      .then(response => {
        alert("Posted successfully!");
        setTypedComment("");
        setRefreshComments(true);
      })
      .catch(error => {
        // Handle error (e.g. alert or toast)
      });
  };
  return (
    <div className="font-poppins relative">
        <div>
            <header className="bg-bgcolor h-[5rem] flex items-center text-black text-2xl pl-8">Comments</header>
        </div>
        <div onClick={handleClose3} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>

        <div className="h-[25rem] lg:h-[30rem] bg-bgcolor overflow-y-scroll pt-2">
         {
          comments?
          <div className="w-[98%] mx-auto">
            {
              comments.map((eachComment,index)=>{
                return <CommentCard key={index} eachComment={eachComment} handleDelete={handleDelete}/>
              })
            }
          {/* <CommentCard /> */}

          </div>: 
          <div className="h-[30rem] w-[40rem] flex items-center justify-center">
              <div className="mb-20 text-center">Loading...</div>
              <div className="newtons-cradle ">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
              </div>
          </div>
         }
          

        </div>

        <form onSubmit={submitComment} className='flex items-center justify-between px-5 mt-2'>
          <div className="h-[2.3rem] w-[2.3rem] bg-black text-center text-white rounded-full">tr</div>
          <textarea value={typedComment} onChange={e=>setTypedComment(e.target.value)} className='bg-blue-300 text-sm outline-none rows="2" w-[80%] mx-4 rounded-lg pl-4 p-1' ></textarea>
          <button type="submit" className='bg-blue-500 hover:bg-blue-600 py-2 px-2 text-white rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
    </div>
  )
}

export default Comments


