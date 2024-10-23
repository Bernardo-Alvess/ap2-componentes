import cookingImg from '../assets/second-hero/img-cooking.svg';
import meetingImg from '../assets/second-hero/img-meeting.svg';

const SecondHero = () => {
	return (
		<div className="hidden md:flex items-center justify-between px-6 w-full pt-32 pb-16">
			<div className="flex text-2xl font-bold">
				<p>Não fique de fora dessa!</p>
			</div>
			<div>
				<img src={cookingImg} alt="" />
			</div>
			<div>
				<img src={meetingImg} alt="" />
			</div>
		</div>
	);
};

export { SecondHero };
