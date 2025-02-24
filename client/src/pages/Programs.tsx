import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des programmes");
        }
        return response.json();
      })
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <div key={program.id}>
            <h2>
              {program.title} ({program.year})
            </h2>
            <p>{program.country}</p>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
          </div>
        ))}
      </ul>
    </div>
  );
}
