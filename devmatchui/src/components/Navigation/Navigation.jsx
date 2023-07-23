import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Navigation = () => {
   
    const [menu,setMenu] = useState(true)

    return (

        
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-16 bg-black px-4 text-white border-b-2 border-neutral-900">
            <div className="flex items-center">
                {/* <h2 className="w-10 h-10 rounded-md text-sm  bg-purple-700 font-bold center">Dm</h2> */}
                <h1 className="font-bold text-2xl">DevMatch</h1>
            </div>


            <div>
                    {menu ? <GiHamburgerMenu onClick={()=>setMenu(false)} size="36" /> : <AiOutlineCloseCircle color={'white'} onClick={()=>setMenu(true)} size="36" />}
            </div>

            {!menu && <div className="absolute w-1/2 top-20 right-4 p-4 z-10 rounded-md border-2 border-neutral-800 bg-neutral-900 ">
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
                sfsd f <br />
            </div>}

        </div>
  )
}

export default Navigation