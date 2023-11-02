import React from 'react';
import { useParams } from 'react-router-dom';
import BikeDetails from './BikeDetails';

function BikeDetailsPage() {
  const { bikeId } = useParams();
  console.log('bikeId:', bikeId);
  return (
    <BikeDetails bikeId={bikeId} />
  );
}

export default BikeDetailsPage;
