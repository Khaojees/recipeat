import weblogo from "@/assets/Recipeat-white.svg";
import MiniSearchForm from '@/SearchForm/MiniSearchForm'
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="flex flex-wrap justify-center items-center w-[100vw] sticky top-0 z-50">
            <div className='flex flex-wrap justify-between items-center bg-[#1b1b1bff] z-20 w-[100vw] px-[30px]'>
              <Link
              to={"/homepage"}>
              <img
                        src={weblogo}
                        className="min-w-[120px] my-[15px] mr-[40px]"
                  />
              </Link> 
                <MiniSearchForm/>
            </div>            
    </div>
      
  );
}

export default NavBar;
