import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // whole stars
  const hasHalf = rating % 1 >= 0.5;     // check if it has half star
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex text-yellow-500 text-sm">
      {[...Array(fullStars)].map((_, i) => <FaStar key={'f' + i} />)}
      {hasHalf && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={'e' + i} />)}
    </div>
  );
}
