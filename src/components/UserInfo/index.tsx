import React from "react";
import styles from "./UserInfo.module.scss";
import { UserType } from "../../types/User";

interface UserInfoProps
  extends Pick<UserType, "avatarUrl" | "fullName" | "createdAt"> {}

export const UserInfo = ({ avatarUrl, fullName, createdAt }: UserInfoProps) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={avatarUrl || "/noavatar.png"}
        alt={fullName}
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{createdAt}</span>
      </div>
    </div>
  );
};
