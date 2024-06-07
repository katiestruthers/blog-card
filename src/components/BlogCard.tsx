import blogImage from "../img/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { GoArrowRight } from "react-icons/go";

export const BlogCard = () => {
  return (
    <article className="card">
      <img src={blogImage} alt="Blog cover" />
      <div className="content">
        <header>
          <div className="badge text-sm">Interior</div>
          <h2 className="text-lg font-semibold">Top 5 Living Room Inspirations</h2>
        </header>
        <p className="text-base text-neutral-600 font-medium">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
        <button className="text-indigo-700 text-base font-medium">Read More <GoArrowRight className="GoArrowRight" /></button>
      </div>
    </article>
  )
};