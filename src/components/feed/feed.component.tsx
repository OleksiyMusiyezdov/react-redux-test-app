import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsAction } from "../../redux/actions";
import { newsSelector } from "../../redux/selectors";
import "./feed.css";

export default function Feed() {
  const dispatch = useDispatch();

  const news = useSelector(newsSelector);

  useEffect(() => {
    dispatch(getNewsAction());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>NEWS FEED</h1>
      <Button variant="outlined">
        <Link to="/profile"> Go to Profile</Link>
      </Button>
      {news.map((item) => {
        return (
          <div className="block" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="article">{item.article}</div>
          </div>
        );
      })}
    </div>
  );
}
