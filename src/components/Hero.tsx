// import rocket from '../assets/hero/Board.svg';
// import btnIcon from '../assets/hero/lets-icons_check-fill.svg';
// interface Props {
// 	user: string;
// }

// const Hero = (data: Props) => {
// 	return (
// 		<div className="grid grid-cols-12 gap-6 pt-6 mx-6 bg-red-100">
// 			<div className="flex flex-col items-center w-full bg-green-950 col-span-4 md:col-span-4 p-4 rounded-lg gap-5 text-white">
// 				<div className="flex flex-col gap-3">
// 					<p className="text-xl">Seja Bem Vindo, {data.user}</p>
// 					<button className="flex items-center justify-evenly bg-blue-950 p-3 rounded-lg gap-3 text-white">
// 						Localização
// 						<img src={btnIcon} />
// 					</button>
// 				</div>
// 				<div className="flex w-full flex-row items-center justify-around">
// 					<div>
// 						<p>Cep</p>
// 						<p>Cidade</p>
// 					</div>
// 					<div>
// 						<p>Bairro</p>
// 						<p>Endereço</p>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="hidden md:col-span-4 w-full p-6 md:flex md:flex-row rounded-lg border border-gray-500 shadow-lg">
// 				<div className="text-center mb-4 text-black flex justify-evenly flex-col ">
// 					<p className="text-2xl font-bold">
// 						Prepare-se para o maior evento do ano
// 					</p>
// 					<p className="text-2xl font-bold">
// 						Chame seus amigos e colegas!
// 					</p>
// 				</div>
// 				<div className="flex justify-center">
// 					<img
// 						src={rocket}
// 						alt="Rocket illustration"
// 						className="max-w-full h-auto"
// 					/>
// 				</div>
// 			</div>
// 			<div className="flex col-span-4 md:col-span-2 w-full p-4 items-center justify-end">
// 				<a href="#register-form">
// 					<button className="flex bg-blue-950 px-7 py-3 rounded-lg gap-3 text-white">
// 						Inscreva-se <img src={btnIcon} />
// 					</button>
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export { Hero };

import rocket from '../assets/hero/Board.svg';
import btnIcon from '../assets/hero/lets-icons_check-fill.svg';
import matrixJpg from '../assets/hero/matrix.jpg';

interface Props {
	user: string;
}

const Hero = (data: Props) => {
	return (
		<div className="flex flex-row justify-between pt-6 mx-6">
			<div
				className="bg-green-950 rounded-lg  text-white font-bold bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${matrixJpg})` }}
			>
				<div className="flex flex-col items-center gap-6 backdrop-blur-sm w-full h-full p-4 rounded-lg">
					<div className="flex flex-col gap-6">
						<p className="text-2xl">Seja Bem Vindo, {data.user}</p>
						<button className="self-center flex items-center justify-evenly bg-blue-950 p-3 rounded-lg gap-3 text-white w-fit">
							Localização
							<img src={btnIcon} />
						</button>
					</div>
					<div className="flex w-full flex-row items-center gap-20 ">
						<div className="flex flex-col gap-7">
							<p>CEP:</p>
							<p>Cidade:</p>
						</div>
						<div className="flex flex-col gap-7">
							<p>Bairro:</p>
							<p>Endereço:</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-4 px-6 w-2/4 flex flex-row justify-between rounded-lg border border-gray-500 shadow-lg">
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
			<div className="flex p-4 items-center justify-end min-w-fit">
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
