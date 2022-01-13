import {useCallback} from "react";
import {useHttp} from "./http.hook";


export const useReview = () => {

	const {request} = useHttp()

	const pushReview = useCallback(async ({owner, product, text, date}) => {
		try {
			await request('https://mern-online-shop-project.herokuapp.com/api/reviews')
		} catch (e) {
			console.log(e)
		}
	}, [])

	return {pushReview}
}