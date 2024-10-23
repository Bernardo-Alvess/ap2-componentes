import { Card } from './Card';
import ICard from '../@types/ICard.ts';

interface Props {
	cards: ICard[];
}

const Gallery = (data: Props) => {
	return (
		<div className="my-16 flex flex-col gap-5 px-6">
			<h1 className="font-bold text-2xl">Presenças</h1>
			<div className="w-full flex flex-row flex-wrap gap-6 items-center justify-between mt-12">
				{data.cards.map((card, index) => (
					<Card
						key={index}
						url={card.url}
						name={card.name}
						isPaid={card.isPaid}
						isStudent={card.isStudent}
					/>
				))}
			</div>
		</div>
	);
};

export { Gallery };
