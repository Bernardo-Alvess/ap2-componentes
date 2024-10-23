import logo from '../../public/header/logo-computacao.svg';
import { CircleHelp } from 'lucide-react';

const Header = () => {
	return (
		<div className="flex justify-between w-full px-6 py-2 border-b-2 shadow-xl border-gray-300 items-center">
			<img
				src={logo}
				alt="Logo em formato circular da Computação Ulbra Torres"
				className="size-11"
			/>
			<h1 className="text-xl font-bold text-blue-950">
				Entrevero Computação
			</h1>
			<CircleHelp />
		</div>
	);
};

export { Header };
