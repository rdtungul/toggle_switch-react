function DessertsList(props) {
  const DessertsListItems = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((resDessert) => {
      return (
        <li key={resDessert.id}>
          {resDessert.name} - {resDessert.calories} cal
        </li>
      );
    });
  return <ul>{DessertsListItems}</ul>;
}

export default DessertsList;
