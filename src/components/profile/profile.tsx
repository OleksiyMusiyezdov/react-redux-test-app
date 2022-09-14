import "./profile.css";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Profile() {
  const description = faker.lorem.lines(50);

  return (
    <div className="container">
      <h1>My Name</h1>
      <Button variant="outlined">
        <Link to="/feed"> Go to News feed</Link>
      </Button>
      <div className="block">
        <img
          src="Github-PNG-Image.jpg"
          className="image"
          alt="me"
          width="600"
          height="400"
        />
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
