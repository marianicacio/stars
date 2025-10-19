import { Alert } from "react-native";

const API_URL = "https://68f53e90b16eb6f46836baec.mockapi.io/minhete/users";
const API_URL_VEICULOS = "https://68f53e90b16eb6f46836baec.mockapi.io/minhete/veiculos";


// pega os usuarios
export const fetchUsers = async () => {

    try {
        const response = await fetch(
        API_URL
    );
        const data = await response.json();
        return data; // Retorna um array de usuários
  } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return [];
  }

}


// pega os veiculos
export const fetchCars = async () => {

  try {

    const response = await fetch(API_URL_VEICULOS)
    const data = response.json();
    return data;

  } catch(erro) {
    console.error("Erro ao buscar Veiculos: ", error);
    return [];
  }

}


// Cadastro de usuario
export const registerUser = async ( email, name, password) => {

    console.log("Tentando cadastrar")

  try {
    
    const users = await fetchUsers()
    
    const user = users.find(
    
        (u) => u.email === email

    )

    if(user) {

        Alert.alert("Erro", "Já existe um usuario com este email!")
        return null

    }else {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name, password }),
        });

        Alert.alert("Sucesso", "Usuario Cadastrado com Sucesso")

        console.log("Status da resposta:", response.status); // ✅
        const data = await response.json();
        console.log("Resposta da API:", data); // ✅
        return data;

    }

    
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return null;
  }
};


//Cadastro de veiculo
export const RegisterVeiculo = async ( placa, dt_entrada) => {

  console.log("Cadastrando veiculo")

  try {
    const cars = await fetchCars()
    
    const car = cars.find(
    
        (c) => c.placa === placa

    )

    if(car) {

        Alert.alert("Erro", "Já existe um carro com esta Placa")
        return null

    }else {

        const response = await fetch(API_URL_VEICULOS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({placa, dt_entrada }),
        });

        Alert.alert("Sucesso", "Veiculo Cadastrado com Sucesso")

        console.log("Status da resposta:", response.status); // ✅
        const data = await response.json();
        console.log("Resposta da API:", data); // ✅
        return data;

    }
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return null;
  }

}


//saida de veiculo
export const saidaVeiculo = async (placa) => {

  try {

    const veiculos = await fetchCars()

    const veiculo = veiculos.find(

      (car) => car.placa === placa

    )

    if(veiculo) {

        const response = await fetch(`${API_URL_VEICULOS}/${veiculo.id}`, {
            method: "DELETE",
        });

      Alert.alert("Sucesso", "Veiculo Retirado!!");

      return response

    } else {
                Alert.alert("Erro", "Placa Incorreta");
    }

  }catch (error) {

    console.error("Erro na Saida", error);
    return null

  }

}