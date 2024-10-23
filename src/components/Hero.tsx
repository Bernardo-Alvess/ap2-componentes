import { useCallback, useState } from 'react';
import rocket from '../assets/hero/Board.svg';
import checkBtnIcon from '../assets/hero/lets-icons_check-fill.svg';
import locationBtnIcon from '../assets/hero/mdi_location.svg';
import matrixJpg from '../assets/hero/matrix.jpg';
import { getInfoForCep } from '../http/GetInfoForCep';
import ICepData from '../@types/ICep';

interface Props {
	user: string;
}

const Hero = (data: Props) => {
	const [cepData, setCepData] = useState<ICepData | null>(null);
	const [showData, setShowData] = useState(false);
	const fetchData = useCallback(async () => {
		const _cepData = await getInfoForCep('95555000');
		if (_cepData != cepData) setCepData(_cepData);
	}, [cepData]);

	const handleClick = () => {
		fetchData();
		setShowData(true);
	};

	return (
		<div className="flex flex-row justify-between pt-6 mx-6">
			<div
				className="bg-green-950 rounded-lg  text-white font-bold bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${matrixJpg})` }}
			>
				<div className="flex flex-col items-center gap-6 backdrop-blur-sm w-full h-full p-4 rounded-lg">
					<div className="flex flex-col gap-6">
						<p className="text-2xl">Seja Bem Vindo, {data.user}</p>
						<button
							onClick={handleClick}
							className="self-center flex items-center justify-evenly bg-blue-950 p-3 rounded-lg gap-3 text-white w-fit"
						>
							Localização
							<img src={locationBtnIcon} />
						</button>
					</div>
					<div className="flex w-full flex-row items-center">
						<div className="flex flex-col gap-5 w-full h-32">
							<div>
								<p>CEP:</p>
								<p>{cepData?.cep}</p>
							</div>
							<div>
								<p>Cidade:</p>
								<p>{cepData?.localidade}</p>
							</div>
						</div>
						<div className="flex flex-col gap-5  w-full h-32">
							<div>
								<p>Bairro:</p>
								<p>{showData ? 'Santa Luzia' : ''}</p>
							</div>
							<div>
								<p>Endereço:</p>
								<p>{cepData?.uf}</p>
							</div>
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
						Inscreva-se <img src={checkBtnIcon} />
					</button>
				</a>
			</div>
		</div>
	);
};

export { Hero };
