import React from "react";
import styles from "./UserInfo.module.scss";
import { UserType } from "../../types/User";

interface UserInfoProps
  extends Pick<UserType, "avatar" | "name" | "createdAt"> {}

// const localDate = new Intl.DateTimeFormat("en-Gb", {
//   day: "numeric",
//   month: "short",
//   year: "numeric",
// });

export const UserInfo = ({ avatar, name, createdAt }: UserInfoProps) => {
  // const joinedDate = localDate.format(new Date(createdAt!));
  // console.log(joinedDate);
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={avatar || "/noavatar.png"}
        alt={name}
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.additional}>{createdAt}</span>
      </div>
    </div>
  );
};
