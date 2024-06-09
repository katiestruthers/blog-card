/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <a href="#">
          <button className="text-indigo-700 text-base font-medium" type="button">Read more <GoArrowRight className="GoArrowRight" /></button>
        </a>
      </div>
    </article>
  )
};