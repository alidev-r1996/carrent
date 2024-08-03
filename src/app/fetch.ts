export async function fetchCar() {
  const res = await fetch("http://localhost:5000/api", { cache: "force-cache" });
  const data = await res.json();
  return data;
}
