import logo from '../../public/header/logo-computacao.svg';
import { CircleHelp } from 'lucide-react';

const Footer = () => {
	return (
		<div className="flex justify-between w-full px-6 py-2 border-t-2 border-grey-300 items-center shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
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

export { Footer };
