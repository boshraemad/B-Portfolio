
import { GiFlowerPot } from "react-icons/gi";
function Separator({children}){
    return(
        <div className="flex items-center gap-1 mt-6 mx-auto ps-4 font-[600] relative after:absolute after:bg-pink-200 after:h-[40px] after:w-[6px] after:top-[50%] after:translate-y-[-50%] after:left-[0px]">
            {/* <GiFlowerPot className="text-pink-200 text-2xl"/> */}
            <p className="lg:text-4xl text-xl">{children}</p>
        </div>
    )
}

export default Separator;