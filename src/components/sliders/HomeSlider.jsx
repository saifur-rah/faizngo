import React, { useState } from "react";

import { data } from "../../FakeData";
const HomeSlider = () => {
	const [index, setIndex] = useState(0);

	const handleClick = (value) => {
		if (value === "right") {
			console.log("right");
			setIndex((index + 1) % 3);
		} else if (value === "left") {
			console.log("left");
			setIndex((3 + index - 1) % 3);
		}
	};

	return (
		<div className="relative   md:h-screen  overflow-hidden">
			<div
				onClick={() => handleClick("left")}
				className="ml-4 cursor-pointer z-40 px-2 py-2 flex items-center absolute left-0 top-0 bottom-0 my-auto h-fit bg-white opacity-50 rounded-full"
			>
				"left"
			</div>

			<div
				style={{ transform: ` translateX(-${index * 100}vw)` }}
				className="flex h-screen transition-all  duration-1000  items-center w-screen"
			>
				{data.map((item) => (
					<div
						style={{ backgroundColor: item.color }}
						key={item.id}
						className="h-screen min-w-full flex  text-centre"
					>
						<div className="w-1/2 md:h-full sm:h-[60vh] h-[50vh] flex md:items-center items-start justify-center overflow-hidden">
							<img
								className=" h-full  object-cover   "
								src={item.img}
								alt={item.img}
							></img>
						</div>
						<div className="w-1/2 m-2 md:mt-0 mt-8 flex flex-col md:justify-center  justify-start ">
							<h1 className="lg:text-6xl md:text-4xl text-xl mr-4 text-white">
								{item.title}
							</h1>
							<p className="text-gray-100 mr-4  uppercase sm:font-thin  md:text-lg text-xs tracking-wider">
								{item.details}
							</p>
							<button className="w-fit p-2 font-thin md:text-xl text-lg border-4 text-slate-900  border-slate-600">
								Shop Now &#x2192;
							</button>
						</div>
					</div>
				))}
			</div>

			<div
				onClick={() => handleClick("right")}
				className="mr-4 cursor-pointer flex items-center px-2 py-2 absolute right-0 top-0 bottom-0 my-auto h-fit  bg-white opacity-50 rounded-full"
			>
				"right"
			</div>
		</div>
	);
};

export default HomeSlider;
