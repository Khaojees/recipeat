import { mealTypes, dietOption, cuisineOption } from "@/util/optionList";
import { BiSearchAlt } from "react-icons/bi";
import {useSearchForm} from '@/SearchForm/SearchForm.hook'
import {useUnsplachStore} from '@/store/unsplach'

function SearchForm() {
  const {fieldSearchValue,fieldMealsValue,fieldCuisinesValue,fieldDietsValue,submit} = useSearchForm()
  const {unsplachImg} = useUnsplachStore()
  return (
    <div className="flex flex-wrap justify-center items-center w-[100vw] relative">
      <div className="flex justify-center items-center w-[100vw] h-[93vh]"
      style={{
            backgroundImage: `url(${unsplachImg.data[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
      
        <form className="flex flex-col justify-center items-center relative z-10 mt-[20px]"
        onSubmit={submit}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="z-10 h-[50px] w-[900px] max-w-[80vw] pl-6 rounded-[10px] drop-shadow-2xl text-[1.5em] focus:outline-none px-[40px] py-[35px]"
            {...fieldSearchValue}
            />
            <button type="submit"
            className="absolute right-[12px] top-[16px] z-20 text-[35px] text-[#ff4087]"
            ><BiSearchAlt/></button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 w-[70vw] justify-center items-center my-[50px]">
            
            
            <div className="flex flex-col mx-[1vw] justify-center items-center mb-[10px]">
              <div className="flex justify-center items-center w-[100%] sm:w-[100%] lg:w-[100%]">
                <label className="text-[1.3em] px-[30px] py-[5px] rounded-t-[30px] bg-red-500 text-white">
                  Meals types
                </label>
              </div>
              <select
                className="appearance-none w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] px-[20px] text-[1.1em] rounded-[10px] drop-shadow-2xl focus:outline-none"
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                  backgroundSize: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 12px) center",
                }}
                defaultValue={'DEFAULT'}
                {...fieldMealsValue}
              >
                <option value="DEFAULT">Choose meal types</option>
                {mealTypes.map((item, index) => {
                  return (
                    <option
                      className=""
                      key={`meal-types-key-${index}`}
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col mx-[1vw] justify-center items-center mb-[10px]">
              <div className="flex justify-center items-center w-[100%] sm:w-[100%] lg:w-[100%]">
                <label className="text-[1.3em] px-[30px] py-[5px] rounded-t-[30px] bg-red-500 text-white">
                  Cuisines
                </label>
              </div>
              <select
                className="appearance-none w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] px-[20px] text-[1.1em] rounded-[10px] drop-shadow-2xl focus:outline-none" // w-[100%] sm:w-[100%] lg:w-[100%]
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                  backgroundSize: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 12px) center",
                }}
                defaultValue={'DEFAULT'}
                {...fieldCuisinesValue}
              >
                <option value="DEFAULT">Choose cuisines</option>
                {cuisineOption.map((item, index) => {
                  return (
                    <option
                      className=""
                      key={`meal-types-key-${index}`}
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col mx-[1vw] justify-center items-center mb-[10px]">
              <div className="flex justify-center items-center w-[100%] sm:w-[100%] lg:w-[100%]">
                <label className="text-[1.3em] px-[30px] py-[5px] rounded-t-[30px] bg-red-500 text-white">
                  Diets
                </label>
              </div>
              <select
                className="appearance-none w-[100%] sm:w-[100%] lg:w-[100%] h-[50px] px-[20px] text-[1.1em] rounded-[10px] drop-shadow-2xl focus:outline-none"
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                  backgroundSize: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 12px) center",
                }}
                defaultValue={'DEFAULT'}
                {...fieldDietsValue}
              >
                <option value="DEFAULT">Choose diets types</option>
                {dietOption.map((item, index) => {
                  return (
                    <option
                      className=""
                      key={`meal-types-key-${index}`}
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
