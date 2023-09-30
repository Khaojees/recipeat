import { mealTypes, dietOption, cuisineOption } from "@/util/optionList";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchForm } from "@/SearchForm/SearchForm.hook";
import filterIcon from "@/assets/FilterIconn.svg";
import { setShowFilter } from "@/store/mealsStore";
import { Transition } from "@headlessui/react";
import heartIconPink from "@/assets/heartIconPink.svg";
import { Link } from "react-router-dom";
import {setShowMeals} from '@/store/mealsStore'
function MiniSearchForm() {
  const {hideMyMeals} = setShowMeals()
  const {
    fieldSearchValue,
    fieldMealsValue,
    fieldCuisinesValue,
    fieldDietsValue,
    submit,
  } = useSearchForm();
  const { myFilter, toggleFilter } = setShowFilter();

  return (
    <div
      className="flex-1 flex flex-wrap justify-start items-center relative
                  sm:justify-start md:justify-end"
    >
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-center relative"
          onSubmit={submit}
        >
          <div className="flex justify-center items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="h-[40px] w-[800px] max-w-[55vw] pl-6 rounded-[10px] text-[1em] focus:outline-none my-[10px]"
                {...fieldSearchValue}
              />
              <button
                type="submit"
                className="absolute right-[8px] top-[18px] text-[25px] text-[#ff4087]"
              >
                <BiSearchAlt />
              </button>
            </div>

            {/* ----------------------filter btn----------------------- */}
            <div className="flex relative">
              <div
                className="flex justify-center items-center ml-[10px] h-[40px] w-[40px] rounded-[10px] bg-white hover:cursor-pointer"
                onClick={() => toggleFilter()}
              >
                <img src={filterIcon} className="h-[17px]" />
              </div>

              {/* ----------------------filter section----------------------- */}

              <Transition
                show={myFilter}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="absolute right-[75px] top-[45px] flex flex-col w-[100%] justify-end items-center
                            sm:flex-row md:flex-row sm:right-[35px]"
                >
                  <div className="flex flex-col mx-[5px] justify-center items-center mb-[10px] drop-shadow-lg">
                    <select
                      className="appearance-none min-w-[160px] w-[100%] h-[35px] pr-[20px] pl-[10px] text-[0.9em] rounded-[10px] drop-shadow-2xl
                      focus:outline-none focus:ring-2 focus:ring-grey-200 focus:ring-inset"
                      style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                        backgroundSize: "20px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "calc(100% - 8px) center",
                      }}
                      defaultValue={"DEFAULT"}
                      {...fieldMealsValue}
                    >
                      <option value="DEFAULT">Meal types</option>
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

                  <div className="flex flex-col mx-[5px] justify-center items-center mb-[10px] drop-shadow-lg">
                    <select
                      className="appearance-none min-w-[160px] w-[100%] h-[35px] pr-[20px] pl-[10px] text-[0.9em] rounded-[10px] drop-shadow-2xl 
                      focus:outline-none focus:ring-2 focus:ring-grey-200 focus:ring-inset" // w-[100%] sm:w-[100%] lg:w-[100%]
                      style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                        backgroundSize: "20px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "calc(100% - 8px) center",
                      }}
                      defaultValue={"DEFAULT"}
                      {...fieldCuisinesValue}
                    >
                      <option value="DEFAULT">Cuisines</option>
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

                  <div className="flex flex-col mx-[5px] justify-center items-center mb-[10px] drop-shadow-lg">
                    <select
                      className="appearance-none min-w-[160px] w-[100%] h-[35px] pr-[20px] pl-[10px] text-[0.9em] rounded-[10px] drop-shadow-2xl 
                      focus:outline-none focus:ring-2 focus:ring-grey-200 focus:ring-inset"
                      style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
                        backgroundSize: "20px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "calc(100% - 8px) center",
                      }}
                      defaultValue={"DEFAULT"}
                      {...fieldDietsValue}
                    >
                      <option value="DEFAULT">Diets types</option>
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
              </Transition>
            </div>

            <Link
            to={"/saveMeals"}
            onClick={()=>hideMyMeals()}>
            <div className="flex relative">
              <div
                className="flex justify-center items-center ml-[10px] h-[40px] w-[40px] rounded-[10px] bg-white hover:cursor-pointer"
               >
                <img src={heartIconPink} className="h-[17px]" />
              </div>
            </div>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}

export default MiniSearchForm;
