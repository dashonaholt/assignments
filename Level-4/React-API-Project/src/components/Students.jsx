import react from "react"

export default function Students() {
    const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters/"
        );
        const hogwartsStudents = response.data.filter(
          (student) => student.hogwartsStudent === true
        );
        setNames(hogwartsStudents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNames();
  }, []);
    return (
        <ul>
        {names.map((name) => (
          <li key={name.name}>{name.name}</li>
        ))}
      </ul>
    );
    
}