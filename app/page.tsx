'use client';

import { useEffect, useState } from 'react';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, manufacturers, yearsOfProduction } from "@/constant";
import { HomeProps } from "@/types";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const [isDataEmpty, setIsDataEmpty] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await fetchCars({
        manufacturers: searchParams.manufacturers || '',
        year: searchParams.year || 2022,
        limit: searchParams.limit || 10,
        fuel: searchParams.fuel || '',
        model: searchParams.model || '',
      });

      setAllCars(cars);
      setIsDataEmpty(!Array.isArray(cars) || cars.length < 1 || !cars);
    };

    fetchData();
  }, [searchParams]); // Depend on searchParams to trigger fetching when they change

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
