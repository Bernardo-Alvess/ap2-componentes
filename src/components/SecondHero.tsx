import cookingImg from '../assets/second-hero/cooking.svg';

const SecondHero = () => {
	return (
		<div className="hidden md:flex items-center justify-between p-4 w-full">
			<div className="flex w-1/3 items-center justify-center text-2xl font-bold">
				<p>Não fique de fora dessa!</p>
			</div>
			<div>
				<img src={cookingImg} alt="" />
			</div>
		</div>
	);
};

export { SecondHero };
