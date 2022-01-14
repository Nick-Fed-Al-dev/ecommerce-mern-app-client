import {useCallback} from "react";
import {useHttp} from "./http.hook";


export const useReview = () => {
	const reviewBaseUrl = 'https://mern-online-shop-project.herokuapp.com/api/reviews/native'
	const {request, loading} = useHttp()

	const getReviews = useCallback(async (productId, token) => {
		try {
			const reviews = (await request(reviewBaseUrl, "GET", null, {
				authorization: 'Bearer ' + token
			})).filter(review => review.product === productId)
			return reviews
		} catch (e) {
			console.log(e)
		}
	}, [])

	const pushReview = useCallback(async (review, token) => {
		try {
			await request(reviewBaseUrl, 'POST', review, {
				Authorization: 'Bearer ' + token
			})
		} catch (e) {
			console.log(e)
		}
	}, [])

	const removeReview = useCallback(async (id, token) => {
		try {
			await request(reviewBaseUrl + '/' + id, "DELETE", null, {
				Authorization: 'Bearer ' + token
			})
		} catch (e) {
			console.log(e)
		}
	}, [])

	return {getReviews, pushReview, removeReview, loading}
}