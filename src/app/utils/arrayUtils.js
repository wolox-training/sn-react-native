const getRandomValues = (array, number) => array.sort(() => 0.5 - Math.random()).slice(0, number);

export { getRandomValues };
