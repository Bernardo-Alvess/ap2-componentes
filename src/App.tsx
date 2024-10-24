import { useState } from 'react';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SecondHero } from './components/SecondHero';
import { RegisterForm } from './components/RegisterForm';
import ICard from './@types/ICard';
import { Footer } from './components/Footer';

function App() {
	const arr: ICard[] = [
		{
			name: 'Lorenzo Cardoso',
			number: '(71) 99432-1098',
			isPaid: false,
			isStudent: true,
			url: 'https://avatars.githubusercontent.com/u/102180476?v=4',
		},
		{
			name: 'Code Bullet',
			number: '(81) 99321-0987',
			isPaid: true,
			isStudent: false,
			url: 'https://avatars.githubusercontent.com/u/36225427?v=4',
		},
		{
			name: 'Maikel Peixouto',
			number: '(91) 99210-9876',
			isPaid: true,
			isStudent: true,
			url: 'https://avatars.githubusercontent.com/u/101783958?v=4',
		},
		{
			name: 'Augusto Galego',
			number: '(11) 99109-8765',
			isPaid: true,
			isStudent: false,
			url: 'https://avatars.githubusercontent.com/u/31139680?v=4',
		},
		{
			name: 'Ramon Lummertz	',
			number: '(21) 99098-7654',
			isPaid: false,
			isStudent: false,
			url: 'https://avatars.githubusercontent.com/u/3951800?v=4',
		},
		{
			name: 'Gustavo Guanabara',
			number: '(31) 98987-6543',
			isPaid: true,
			isStudent: false,
			url: 'https://avatars.githubusercontent.com/u/8683378?v=4',
		},
	];
	
	const [cards, setCards] = useState<ICard[]>(arr);

	const addCard = (newCard: ICard) => {
		setCards((prevCards) => [...prevCards, newCard]);
	};

	return (
		<div>
			<Header />
			<Hero user={'Bernardo Alves'} />
			<Gallery cards={cards} />
			<SecondHero />
			<RegisterForm add={addCard} />
			<Footer></Footer>
		</div>
	);
}

export { App };
