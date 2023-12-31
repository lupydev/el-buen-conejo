import React, {useEffect, useState} from "react";
import useHttpGetWithPagination from "../../hooks/useHttpGetWithPagination";
import { useLoaderData } from "react-router-dom";
import CardImage from "../../Components/CardImage";
import { Link } from "react-router-dom";
import AppLink from "../../UI/AppLink";
import Heading from "../../UI/Heading";
import { apiUrls } from "../../utils/links";

const ViewAllRabbits = () => {
    const breedSelected = useLoaderData();
    const [rabbits, setRabbits] = useState([]);
    const { isLoading, error, data, sendRequest } = useHttpGetWithPagination();
    const [isDataReady, setIsDataReady] = useState(false);
  
    useEffect(() => {
      sendRequest(`${apiUrls.urlRabbits}`);
    }, [sendRequest, breedSelected]);
  
    useEffect(() => {
      if (!isLoading && data) {
        setIsDataReady(false);
        const rabbitsData = data.map((rabbit) => ({
          id: rabbit.id,
          tag: rabbit.tag,
          photo: rabbit.photo,
          price: rabbit.price,
        }));
        setRabbits(rabbitsData);
        setIsDataReady(true);
      }
    }, [isLoading, data, sendRequest, breedSelected]);
  
    return (
      <>
        {!isDataReady && (
          <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
        )}
        {error && (
          <h2 className="text-danger text-center m-5 p-5">
            Ha ocurrido un error, intente de nuevo
          </h2>
        )}
        {isDataReady && !error && rabbits.length === 0 && (
          <h2 className="text-muted text-center m-5 p-5">
            No hay conejos disponibles
          </h2>
        )}
        {rabbits.length > 0 && (
          <section>
            <Heading className="text-center m-4">Conejos Disponibles</Heading>
            <div className="row">
              {rabbits.map((rabbit) => (
                <div
                  key={rabbit.id}
                  className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
                >
                  <AppLink href={`/rabbits/${rabbit.id}`}>
                    <CardImage
                      image={rabbit.photo}
                      title={rabbit.tag}
                      text={`$ ${rabbit.price}`}
                    />
                  </AppLink>
                </div>
              ))}
            </div>
          </section>
        )}
      </>
    );
  };

export default ViewAllRabbits