import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Categories.css';

function Categories() {
  const status = useSelector((state) => state.category.status);
  return <h1>{status}</h1>;
}

export default Categories;
