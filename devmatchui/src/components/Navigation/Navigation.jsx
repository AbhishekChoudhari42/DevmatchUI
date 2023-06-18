import {GiHamburgerMenu} from 'react-icons/gi'
const Navigation = () => {

    return (
        
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-16 bg-black px-4 text-white border-b-2 border-neutral-900">
            <div className="flex items-center">
                <h2 className="w-10 h-10 rounded-md text-sm  bg-purple-700 font-bold center">Dm</h2>
                <h1 className="font-bold ml-2 text-2xl">DevMatch</h1>
            </div>
            <div>
                <GiHamburgerMenu size="36"/>
            </div>
        </div>
  )
}

export default Navigation