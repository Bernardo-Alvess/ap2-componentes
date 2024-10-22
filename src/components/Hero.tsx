import rocket from '../assets/hero/Board.svg';
import btnIcon from '../assets/hero/lets-icons_check-fill.svg';
interface Props {
	user: string;
}

const Hero = (data: Props) => {
	return (
		<div className="grid grid-cols-12 gap-6 p-2 pt-6">
			<div className="flex flex-col items-center w-full bg-green-950 col-span-7 md:col-span-4 p-4 rounded-lg gap-5 text-white">
				<div className="flex flex-col gap-3">
					<p className="text-xl">Seja Bem Vindo, {data.user}</p>
					<button className="flex items-center justify-evenly bg-blue-950 p-3 rounded-lg gap-3 text-white">
						Localização
						<img src={btnIcon} />
					</button>
				</div>
				<div className="flex w-full flex-row items-center justify-around">
					<div>
						<p>Cep</p>
						<p>Cidade</p>
					</div>
					<div>
						<p>Bairro</p>
						<p>Endereço</p>
					</div>
				</div>
			</div>
			<div className="hidden md:col-span-6 w-full p-6 md:flex md:flex-row rounded-lg border border-gray-500 shadow-lg">
				<div className="text-center mb-4 text-black flex justify-evenly flex-col ">
					<p className="text-2xl font-bold">
						Prepare-se para o maior evento do ano
					</p>
					<p className="text-2xl font-bold">
						Chame seus amigos e colegas!
					</p>
				</div>
				<div className="flex justify-center">
					<img
						src={rocket}
						alt="Rocket illustration"
						className="max-w-full h-auto"
					/>
				</div>
			</div>
			<div className="flex col-span-5 md:col-span-2 w-full p-4 items-center justify-center">
				<a href="#register-form">
					<button className="flex bg-blue-950 px-7 py-3 rounded-lg gap-3 text-white">
						Inscreva-se <img src={btnIcon} />
					</button>
				</a>
			</div>
		</div>
	);
};

export { Hero };
