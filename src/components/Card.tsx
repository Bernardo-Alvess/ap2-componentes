interface Props {
	url: string;
	name: string;
	isPaid: boolean;
	isStudent: ConstrainBoolean;
}

const Card = (data: Props) => {
	return (
		<div className="min-w-64 border border-gray-400 flex-row min-h-36 rounded-lg justify-between items-center shadow-xl">
			<div className="flex items-center gap-4 p-2 h-full w-full">
				<img
					src={data.url}
					alt=""
					className="size-16 rounded-full border border-blue-950"
				/>
				<p className="text-lg truncate">{data.name}</p>
			</div>
			<div className="flex flex-col gap-2 items-center justify-center font-bold h-full">
				<p>{data.isStudent ? 'Aluno' : 'Egresso/convidado'}</p>
				{data.isPaid ? (
					<div
						className="rounded-lg p-1"
						style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)' }}
					>
						<p className="text-green-500">Confirmado</p>
					</div>
				) : (
					<div
						className="rounded-lg p-1"
						style={{ backgroundColor: 'rgba(235, 255, 0, 0.1)' }}
					>
						<p className="text-yellow-500">Pendente</p>
					</div>
				)}
			</div>
		</div>
	);
};

export { Card };
