import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
