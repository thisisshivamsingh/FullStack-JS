import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { setType } from "./store/users";

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // console.log(movies);

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies
          ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
          : null}
      </ul>
      <hr />
      <button onClick={() => dispatch(addMovie({ id: 3, title: "batman" }))}>
        Add Movie
      </button>
      <hr />
      <h3>User types:{users.type}</h3>
      <button onClick={() => dispatch(setType("Admin"))}>Set type</button>
    </>
  );
};

export default App;
