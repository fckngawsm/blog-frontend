import { Post } from "../../components/Post";
import { useEffect } from "react";
import { Index as AddComment } from "../../components/AddComment";
import { CommentsBlock } from "../../components/CommentsBlock";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { getPostsById } from "./fullPost-slice";
import { currentPostSelector } from "./fullPostSelectors";

export const FullPost = () => {
  const currentPost = useAppSelector(currentPostSelector);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsById(id!));
  }, [dispatch, id]);

  return (
    <>
      {currentPost && (
        <Post
          _id={currentPost._id}
          title={currentPost.title}
          image={currentPost.image}
          author={{ ...currentPost.author }}
          createdAt={currentPost.createdAt}
          viewsCount={currentPost.viewsCount}
          commentsCount={0}
          tags={currentPost.tags}
          isFullPost
          description={currentPost.description}
        />
      )}

      {/* <CommentsBlock
        // items={[
        //   {
        //     user: {
        //       fullName: "Вася Пупкин",
        //       avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
        //     },
        //     text: "Это тестовый комментарий 555555",
        //   },
        //   {
        //     user: {
        //       fullName: "Иван Иванов",
        //       avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
        //     },
        //     text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
        //   },
        // ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock> */}
    </>
  );
};
