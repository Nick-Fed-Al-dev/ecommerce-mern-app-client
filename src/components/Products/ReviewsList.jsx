import {Review} from "./Review";


export const ReviewsList = ({reviews, setReviews}) => {

	const reviewsMarkdown = reviews.map((review, i) => <Review key={i} review={review} setReviews={setReviews} />)

	return (
		<ul className="reviews-list">
			{reviewsMarkdown}
		</ul>
	)
}