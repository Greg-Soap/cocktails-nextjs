import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, category, image }: any) => {
  return (
    <article className={styles.card} tabIndex={0}>
      <Image
        src={image}
        alt={name}
        width={180}
        height={180}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{category}</p>
        <Link href={`/${id}`} className={styles.link}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Card;
