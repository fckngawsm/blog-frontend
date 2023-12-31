import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import styles from "./Post.module.scss";
import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./Skeleton";
import { PostType } from "../../types/Post";
import { Link } from "react-router-dom";

interface PostProps extends PostType {
  isFullPost?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
}

export const Post = ({
  _id,
  title,
  image,
  author,
  viewsCount,
  commentsCount,
  tags,
  description,
  isFullPost,
  isLoading,
  isEditable,
}: PostProps) => {
  console.log(author._id)
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {};
  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {image && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={image}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <UserInfo {...author} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {description && (
            <div className={styles.content}>
              <p>{description}</p>
            </div>
          )}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
