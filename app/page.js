"use client"
import Image from 'next/image'
import News from '../components/News/News.js'
import './App.css';
import useGetWeeklyPosts from '../customHooks/getWeeklyPosts.js';

	/*
function App() {
	const {data, error, loading} = useGetWeeklyPosts();
	console.log({data, error, loading});
  return (
  );
}
*/

export default function Home() {
	const {data, error, loading} = useGetWeeklyPosts();
	console.log({data, error, loading});
  return (
    <main className="">
			<div className="App">
				<News/>
			</div>
    </main>
  )
}
