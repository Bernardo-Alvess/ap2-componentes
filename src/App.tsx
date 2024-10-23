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
			name: 'Ana Silva',
			number: '(11) 91234-5678',
			isPaid: false,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Carlos Oliveira',
			number: '(21) 99876-5432',
			isPaid: false,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'João Santos',
			number: '(31) 98888-9999',
			isPaid: true,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Maria Ferreira',
			number: '(41) 98765-4321',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Lucas Almeida',
			number: '(51) 99654-3210',
			isPaid: false,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Fernanda Lima',
			number: '(61) 99543-2109',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Roberto Costa',
			number: '(71) 99432-1098',
			isPaid: false,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Sofia Martins',
			number: '(81) 99321-0987',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Juliana Souza',
			number: '(91) 99210-9876',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Rafael Gomes',
			number: '(11) 99109-8765',
			isPaid: true,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Cynthia Rodrigues',
			number: '(21) 99098-7654',
			isPaid: false,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Mariana Lopes',
			number: '(31) 98987-6543',
			isPaid: true,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'André Silva',
			number: '(41) 98876-5432',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Patrícia Oliveira',
			number: '(51) 98765-4321',
			isPaid: false,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Felipe Pereira',
			number: '(61) 99654-3210',
			isPaid: false,
			isStudent: true,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Giovana Lima',
			number: '(71) 99543-2109',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Thiago Santos',
			number: '(81) 99432-1098',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
		},
		{
			name: 'Lívia Rocha',
			number: '(91) 99321-0987',
			isPaid: true,
			isStudent: false,
			url: 'https://thispersondoesnotexist.com/',
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
