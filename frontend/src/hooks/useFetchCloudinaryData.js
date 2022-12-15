import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, CLOUDINARY_ROUTE } from "../api/config";

function useFetchCloudinaryData(token) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCloudinaryData = async () => {
      try {
        const response = await axios.get(`${API_URL}${CLOUDINARY_ROUTE}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCloudinaryData();
  }, [token]);

  return data;
}

export default useFetchCloudinaryData;
