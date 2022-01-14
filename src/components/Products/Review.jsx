import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useReview} from "../../hooks/review.hook";


export const Review = ({review, setReviews}) => {

	const {id, isAdmin, token} = useContext(AuthContext)
	const {removeReview} = useReview()

	const removeReviewHandler = async () => {
		await removeReview(review._id, token)
		setReviews(prev => {
			return prev.filter(prevReview => prevReview._id !== review._id)
		})
	}

	return (
		<li className="review">
			<div className="review-head">
				<div className="review-nickname">{review.owner.email}</div>
				<div className="helper-wrapper">
					<div className="review-date">{review.date}</div>
					{(review.owner._id === id) || isAdmin ? <div onClick={removeReviewHandler} className="review-remove">Удалить</div> : null}
				</div>

			</div>
			<div className="review-text">{review.text}</div>
		</li>
	)
}