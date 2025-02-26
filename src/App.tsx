import { useState } from "react";

function App() {
	const [clicks, setClicks] = useState(0);
	return (
		<div className="w-full h-screen bg-gray-900 text-gray-100 flex items-center justify-center ">
			<div className="flex gap-2">
				<button
					className="rounded-sm border border-transparent bg-blue-500 px-3 py-1 hover:bg-blue-400  active:hover:border-blue-200 "
					onClick={() => {
						setClicks(clicks + 1);
					}}
				>
					click
				</button>
				<output className="rounded-sm px-3 py-1 bg-gray-500">
					{clicks}
				</output>
			</div>
		</div>
	);
}

export default App;
