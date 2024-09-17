import Banner from "@/Components/Home/Banner/Banner";
import BestSelling from "@/Components/Home/BestSelling/BestSelling";
import Categories from "@/Components/Home/Categories/Categories";
import ExploreProducts from "@/Components/Home/ExploreProducts/ExploreProducts";
import FlashSales from "@/Components/Home/FlashSales/FlashSales";
import MusicExperience from "@/Components/Home/MusicExperience/MusicExperience";
import WorkSystem from "@/Components/Home/WorkSystem/WorkSystem";


export default function Home() {
  return <div>
        <Banner></Banner>
        <FlashSales></FlashSales>
        <Categories></Categories>
        <BestSelling></BestSelling>
        <MusicExperience></MusicExperience>
        <ExploreProducts></ExploreProducts>
        <WorkSystem></WorkSystem>
  </div>;
}
