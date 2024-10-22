import { Rocket } from 'lucide-react';
import { useState } from 'react';
import ICard from '../@types/ICard';

interface Props {
	add: (newCard: ICard) => void;
}

const RegisterForm = (data: Props) => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [isStudent, setIsStudent] = useState(false);
	const [isPaid, setIsPaid] = useState(true);
	const [url, setUrl] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newCard = {
			name,
			number,
			isStudent,
			isPaid,
			url,
		};

		data.add(newCard);

		setName('');
		setNumber('');
		setIsStudent(false);
		setIsPaid(true);
		setUrl('');
	};

	return (
		<div
			id="register-form"
			className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border mt-5"
		>
			<h1 className="text-xl font-bold text-center mb-4 flex items-center gap-2 justify-center">
				Entrevero Computação 2024
				<span>
					<Rocket />
				</span>
			</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-6 flex flex-col gap-3"
			>
				<div>
					<label className="block font-bold">Nome</label>
					<input
						required
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Digite seu nome"
						className="w-full p-2 border rounded-lg"
					/>
				</div>

				<div>
					<label className="block font-bold">Telefone</label>
					<input
						required
						type="tel"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
						placeholder="Digite seu telefone"
						className="w-full p-2 border rounded-lg"
					/>
				</div>

				<div>
					<label className="block font-bold">Egresso ou aluno?</label>
					<div className="flex items-center gap-4">
						<label className="flex items-center">
							<input
								type="checkbox"
								checked={!isStudent}
								onChange={() => setIsStudent(false)}
								className="mr-2"
							/>
							Egresso/convidado
						</label>
						<label className="flex items-center">
							<input
								type="checkbox"
								checked={isStudent}
								onChange={() => setIsStudent(true)}
								className="mr-2"
							/>
							Aluno
						</label>
					</div>
				</div>

				<div>
					<label className="block font-bold">Pago?</label>
					<div className="flex items-center gap-4">
						<label className="flex items-center">
							<input
								type="checkbox"
								checked={isPaid}
								onChange={() => setIsPaid(true)}
								className="mr-2"
							/>
							Sim
						</label>
						<label className="flex items-center">
							<input
								type="checkbox"
								checked={!isPaid}
								onChange={() => setIsPaid(false)}
								className="mr-2"
							/>
							Não
						</label>
					</div>
				</div>
				<div>
					<label className="block font-bold">Foto</label>
					<input
						required
						type="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Image URL"
						className="w-full p-2 border rounded-lg"
					/>
				</div>
				<div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-950 text-white font-bold rounded-lg"
					>
						Cadastrar
					</button>
				</div>
			</form>
		</div>
	);
};

export { RegisterForm };
