import { CarCardProps } from "@/lib/definitions";

export async function fetchCar(): Promise<CarCardProps[]> {
  const res = await fetch("http://localhost:5000/api", { cache: "no-store" });
  const data = await res.json();
  return data;
}
