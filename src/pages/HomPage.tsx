import NavBar from "./NavBar";
import Meals from "./Meals";
import ScrollToTop from "@/util/SrollToTop";
import SearchForm from "@/SearchForm/SearchForm";
import { setShowSearch,useMealsListStore } from "@/store/mealsStore";
import { useEffect } from "react";
import { getMealsListServeices } from "@/fetchAPI/getMealsList";
import { useUnsplachStore } from "@/store/unsplach";
import { getUnsplachImageServeices } from "@/fetchAPI/getFoodUnsplach";
import ReactLoading from "react-loading";
import { Transition } from "@headlessui/react";

function HomPage() {
  const { mySearch } = setShowSearch();
  const { meals, setMealsList, setFetchMealsList } = useMealsListStore();
  const { unsplachImg, setUnsplachImg } = useUnsplachStore();
  const callImage = async () => {
    setUnsplachImg({ data: [], loading: true, error: null });
    const fetchImgTemp = await getUnsplachImageServeices.getUnsplachImage();
    const imgLink = [];
    if (fetchImgTemp.status === 200) {
      imgLink.push(fetchImgTemp.data?.urls.regular) || [];
      // console.log(imgLink);
      setUnsplachImg({
        data: imgLink,
        loading: false,
        error: fetchImgTemp.status,
      });
    } else {
      setUnsplachImg({
        data: [],
        loading: false,
        error: fetchImgTemp.error,
      });
    }
  };
  const callData = async () => {
    setMealsList({ data: [], loading: true, error: null });
    const fetchTemp = await getMealsListServeices.getMealsList();
    const hahahaha = [];
    if (fetchTemp.status === 200) {
      const hohoho = fetchTemp.data?.recipes || [];
      for (let i of hohoho) {
        if(i.image?.length!>0){
          hahahaha.push(i);
        }
      }
      setFetchMealsList({
        data: hahahaha,
        loading: false,
        error: fetchTemp.status,
      });
      setMealsList({
        data: hahahaha,
        loading: false,
        error: fetchTemp.status,
      });
    } else {
      setFetchMealsList({
        data: [],
        loading: false,
        error: fetchTemp.error,
      });
      setMealsList({
        data: [],
        loading: false,
        error: fetchTemp.error,
      });
    }
  };

  useEffect(() => {
    callImage();
    callData();
    // setTimeout(()=>{
    //   console.log(meals)
    // },1000)
  }, []);
  return (
    <div className="relative">
      <ScrollToTop />
      <NavBar />
      {unsplachImg.loading && meals.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <ReactLoading type="spin" color="#ff999a" />
        </div>
      )}
      <Transition
        show={!unsplachImg.loading && !meals.loading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="relative">
          {mySearch && <SearchForm />}
          <Meals />
        </div>
      </Transition>
    </div>
  );
}

export default HomPage;
