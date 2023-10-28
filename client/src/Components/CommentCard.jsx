import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
const CommentCard = ({eachComment,handleDelete}) => {
  return (
    <div className='w-full mb-2'>
        <div className="uptaken relative flex justify-between w-full h-[7rem] rounded-lg  bg-secondary border-2 border-[#c3c6ce] transition-all duration-500 shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.28)] overflow-hidden">
            <div className="text-black bg-white pt-2">
                <div className=" flex items-center pl-2 pb-2">
                    <p className="h-[2rem] w-[2rem] rounded-full bg-black text-white shadow-gray-900 shadow-sm">tr</p>
                    <p className="text-sm text-left ml-2 font-semibold">{eachComment.user.name}</p>
                </div> 
                <div className="text-sm pl-4">
                    {eachComment.content}
                </div>
            </div>            

            <div className="flex items-center cursor-pointer">
            <Dropdown>
      <DropdownTrigger>  
        <Button variant="bordered" className='border-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
        </Button>
            </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className="px-4" onClick={(e)=>handleDelete(e,eachComment.id)} key="copy" textValue="user"><span className='text-lg bg-black rounded-lg px-3 py-2 text-red-600'>Delete</span></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
    </div>
        
        </div>

  )
}

export default CommentCard