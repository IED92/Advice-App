import React, { useState, useEffect } from "react";
import AdviceItem from "../components/AdviceItem";
import Loader from "../components/Loader";

export function AdviceContainer() {
  const [isLoading, setIsLoading] = useState({});
  const [apiData, setApiData] = useState({});

  const apiUrl = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const adviceData = data;
        setApiData(adviceData);
        return adviceData;
      })

      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiUrl]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AdviceItem adviceId={apiData.slip.id} advice={apiData.slip.advice} />
      )}
    </>
  );
}
