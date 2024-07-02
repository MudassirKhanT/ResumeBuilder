import React from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../Assets/resume.svg";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stand's out!!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
};

export default Header;
