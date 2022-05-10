import { useState, useEffect } from "react";

const useGetRequest = (path) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState("true");
    const [erroMessage, setErrorMessage] = useState("");

    useEffect( () => {
        fetch(path)
        .then(body => {
            if (!body.ok)
            {
                throw Error('Cannot Get Data from API - Request Failure');
            }
            return body.json();
        })
        .then(list => {
            setData(list);
            setIsLoading(false);
            setErrorMessage("");
        })
        .catch(e => {
            setErrorMessage(e.message);
            setData([]);
            setIsLoading(false);
        })
    }, [path]);

    return {data, isLoading, erroMessage}
};

export default useGetRequest;