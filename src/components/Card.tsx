interface Props {
	url: string;
	name: string;
	isPaid: boolean;
	isStudent: ConstrainBoolean;
}

const Card = (data: Props) => {
	return (
		<div className="max-w-64 w-full border border-gray-300 flex-row min-h-44 rounded-lg justify-center items-center shadow-lg">
			<div className="py-6 px-4">
				<div className="flex items-center gap-4 p-2 h-full w-full">
					<img
						src={data.url}
						alt=""
						className="size-16 rounded-full border border-blue-950"
					/>
					<p className="text-base truncate font-medium">
						{data.name}
					</p>
				</div>
				<div className="flex flex-col gap-2 items-center justify-center font-semibold text-base h-full">
					<p>{data.isStudent ? 'Aluno' : 'Egresso/convidado'}</p>
					{data.isPaid ? (
						<div
							className="rounded-lg p-1"
							style={{
								backgroundColor: 'rgba(74, 222, 128, 0.1)',
							}}
						>
							<p className="text-green-500">Confirmado</p>
						</div>
					) : (
						<div
							className="rounded-lg p-1"
							style={{
								backgroundColor: 'rgba(235, 255, 0, 0.1)',
							}}
						>
							<p className="text-yellow-500">Pendente</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export { Card };
