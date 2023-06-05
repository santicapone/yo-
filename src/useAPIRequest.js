import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api");
        const json = await response.json();

        if (response.ok) {
          setData(json);
        } else {
          setError(json);
        }
      } catch (error) {
        setError({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default MyComponent;
