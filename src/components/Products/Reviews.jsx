import {ReviewsList} from "./ReviewsList";


export const Reviews = ({reviews}) => {

	return (
		<div>
			<div className="reviews-title">Отзывы</div>
			<div className="review-form">
				<div className="input-field">
					<input type="text" className="validate" />
					<label htmlFor="icon_prefix">Ваш отзыв...</label>
				</div>
				<button className="btn black review-submit">Отправить</button>
			</div>
			<ReviewsList reviews={reviews} />
		</div>
	)
}