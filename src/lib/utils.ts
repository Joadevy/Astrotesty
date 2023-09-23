import type { Simpson } from "../types/api";

type responseAll = {
	docs: Simpson[]
}

export const getSimpsons = async () => {
    const response = await fetch('https://apisimpsons.fly.dev/api/personajes?limit=50');
    const {docs:data}:responseAll = await response.json();
    return data;
}

type responseOne = {
    result: Simpson[]
}

export const getSimpsonByName = async (name:string) => {
    const response = await fetch(`https://apisimpsons.fly.dev/api/personajes/find/${name}`);
    const {result:data}:responseOne = await response.json();
    console.log(name,data)
    return data.find((simpson) => simpson.Nombre.trim() === name)
}