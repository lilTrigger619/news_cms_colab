"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import {readingTime} from "reading-time-estimator";



const useGetWeeklyPosts = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const getWeeklyPicks = () => {
		axios
			.get(
				"http://localhost:1337/api/weekly-picks/?populate[post][fields]=Title&populate[post][fields]=publishedAt&populate[post][fields]=author_name&populate[post][fields]=content&populate[post][populate][Image][fields]=url&populate[post][populate][Image][fields]=formats&populate[post][fields]=author_name&populate[post][fields]=author_email"
			)
			.then((res) => {
				console.log({ res });
				const { data } = res.data;
				const new_arr = data.map((v, k) => {
					const newData = {
						thumbnail:"http://localhost:1337"+
							v.attributes.post.data.attributes.Image.data.attributes.formats
								.thumbnail.url, //thumbnail
						imgSrc:"http://localhost:1337"+ v.attributes.post.data.attributes.Image.data.attributes.url,
						title: v.attributes.post.data.attributes.Title,
						//summary: v.post.data.summary,
						content: v.attributes.post.data.attributes.Content,
						date: new Date(v.attributes.publishedAt).toDateString(),
						author: v.attributes.post.data.attributes.Author_name,
						author_email: v.attributes.post.data.attributes.Author_email,
					};
					newData.readTime = readingTime(newData.content).minutes;
					return newData;
				});
				//console.log({ new_arr });
				setData(new_arr);
				setLoading(false);
			})
			.catch((err) => {
				console.error({ err });
			});
	};

	//const getThumbnail = (id) => {};

	useEffect(() => getWeeklyPicks(), []);

	return { data, error, loading };
};

export default useGetWeeklyPosts;
