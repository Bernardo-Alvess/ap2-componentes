import ICepData from "../@types/ICep"

const getInfoForCep = async (cep: string): Promise<ICepData> => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()

    return data
}

export { getInfoForCep }