import {ReviewsList} from "./ReviewsList";
import {useReview} from "../../hooks/review.hook";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Loader} from "../Loader";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";


export const Reviews = ({productId}) => {

	const [text, setText] = useState('')
	const [reviews, setReviews] = useState([])

	const {id, token, isAuthenticated} = useContext(AuthContext)

	const {message} = useMessage()

	const {request} = useHttp()

	const {pushReview, getReviews, loading} = useReview()

	const changeHandler = e => setText(e.target.value)

	const pushReviewHandler = async () => {
		if (text.length && isAuthenticated){
			const pushPayload = {
				owner: await request('https://mern-online-shop-project.herokuapp.com/api/user/interact/native/' + id),
				product: productId,
				text,
				date: new Intl.DateTimeFormat('ru').format(new Date())
			}
			console.log(pushPayload)
			await pushReview(pushPayload, token)
			setReviews(prev => [...prev, pushPayload])
			setText('')
		} else if (!isAuthenticated) {
			message("ВОЙДИТЕ ЧТОБЫ ОСТАВЛЯТЬ ОТЗЫВЫ")
		}
	}

	const getReviewsHandler = useCallback(async () => {
		const reviewsFetched = await getReviews(productId, token)
		setReviews(reviewsFetched)
	}, [getReviews, productId, token])

	useEffect(() => {
		getReviewsHandler()
	}, [getReviewsHandler])

	return (
		<div className="reviews">
			<div className="reviews-title">Отзывы: {reviews.length}</div>
			<div className="review-form">
				<div className="input-field">
					<input value={text} id="review" onChange={changeHandler} type="text" className="validate" />
					<label htmlFor="review">Ваш отзыв...</label>
				</div>
				<button onClick={pushReviewHandler} className="btn black review-submit">Отправить</button>
			</div>
			{loading ? <Loader /> : reviews.length ? <ReviewsList reviews={reviews} setReviews={setReviews} /> : <div>Нет отзывов</div>}
		</div>
	)
}