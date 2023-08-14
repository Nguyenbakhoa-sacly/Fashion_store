

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL } from '../Api'
import { ProductsHome } from '../components'
const CategoryProducts = () => {
	const { name } = useParams()
	const [data, setData] = useState([])

	useEffect(() => {
		const getCategory = async () => {
			const response = await fetch(`${baseURL}/products/category/${name}`);
			if (response.status === 200) {
				const res = await response.clone().json();
				setData(res);
			}
			else {
				throw new Error('Unable to fetch data')
			}
		}
		getCategory()
	}, [])

	return (
		<ProductsHome
			data={data}
		/>
	)
}

export default CategoryProducts