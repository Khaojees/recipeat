import Recipes from './pages/Recipes';
import HomPage from './pages/HomPage';
import SaveMeals from '@/pages/SaveMeals'
// import Footer from './pages/Footer';
// import { Transition } from "@headlessui/react";
// import { useUnsplachStore } from "@/store/unsplach";
// import { useMealsListStore } from "@/store/mealsStore";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomPage/>,
  },
  {
    path: "/homepage",
    element: <HomPage/>,
  },
  {
    path: "/recipes/:paranName",
    element: <Recipes/>,
  },
  {
    path: "/saveMeals",
    element: <SaveMeals/>,
  },
]);

import './App.scss'

function App() {
  // const { unsplachImg} = useUnsplachStore();
  // const { meals } = useMealsListStore();
  return (
    <div className='flex flex-wrap justify-center items-between w-[100vw] relative'>  
      <RouterProvider router={router} />
      {/* <Transition
        show={!unsplachImg.loading && !meals.loading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      ><Footer/></Transition> */}
      
    </div>
  )
}

export default App
