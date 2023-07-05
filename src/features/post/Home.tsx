import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { Post } from "../../components/Post";
import { TagsBlock } from "../../components/TagsBlock";
import { CommentsBlock } from "../../components/CommentsBlock";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { getAllPosts, getLastTags } from "./post-slice";
import {
  postsSelectors,
  postsStatusSelectors,
  tagsSelectors,
} from "./post-selectors";
import { authUserSelectors } from "../auth/auth-selectors";

export const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(postsSelectors);
  const status = useAppSelector(postsStatusSelectors);
  const tags = useAppSelector(tagsSelectors);
  const currentUser = useAppSelector(authUserSelectors);
  const isTagsLoading = status === "loading";
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getAllPosts());
      dispatch(getLastTags());
    }
  }, [dispatch, posts]);

  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {posts.map((post) => (
            <Post
              key={post._id}
              {...post}
              isEditable={post.author._id === currentUser?._id}
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock tags={tags} isLoading={isTagsLoading} />
          {/* <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};
