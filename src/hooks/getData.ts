// import { NextResponse } from 'next/server';

// export async function GET() {
// 	const res = await fetch('mongodb://localhost:27017/');
// 	const data = await res.json();
// 	return NextResponse.json(data);
// }

// export default async function Page() {
// 	let data = await fetch('https://api.vercel.app/blog');
//   let posts = await data.json();
//   console.log(posts);

// 	return (
// 		<ul>
// 			{posts.map(post => (
// 				<li key={post.id}>{post.title}</li>
// 			))}
// 		</ul>
// 	);
// }
