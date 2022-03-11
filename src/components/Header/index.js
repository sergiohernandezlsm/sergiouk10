import React from "react";
import css from "./Header.module.scss";
import Navigator from "./Navigator";

export default function Header() {
  return (
    <div className={css.header} id="home">
      <Navigator />
      <div className={css.topImageWrapper}>
        <h1 className={css.headerText}>
          {`Sergio Hernández`}
          <span>{`Software Engineer`}</span>
        </h1>
      </div>
    </div>
  );
}
