export async function fetchCar() {
  const res = await fetch("http://localhost:5000/api", { cache: "no-store" });
  const data = await res.json();
  return data;
}
