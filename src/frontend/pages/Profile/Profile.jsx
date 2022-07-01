import { Image } from "cloudinary-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { followUser, getUser, unfollowUser } from "../../thunks/usersThunk";
import { getPostsByUser } from "../../thunks/postsThunks";
import { Post } from "../../components/Post/Post";
import { FollowersModal } from "../../components/FollowersModal/FollowersModal";
import { FollowingModal } from "../../components/FollowingModal/FollowingModal";
import { setUserData } from "../../slice/authSlice";
import { toastContainer } from "../../toast/toast";
import { EditProfileModal } from "../../components/EditProfileModal/EditProfileModal";

export const Profile = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const { userData, encodedToken } = useSelector((state) => state.auth);
  const { userProfile } = useSelector((state) => state.users);
  const { userPosts, posts } = useSelector((state) => state.posts);
  const { username, followers, following, bio, image, website } = profileId
    ? userProfile
    : userData;
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const userId = profileId ? profileId : userData._id;

  if (!userData) {
    navigate("/login");
  }

  useEffect(() => {
    dispatch(getPostsByUser(profileId ? profileId : userData._id));
    dispatch(getUser({ userId }));
  }, [dispatch, posts, profileId, userData._id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const followHandler = async () => {
    const res = await dispatch(followUser({ profileId, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      dispatch(setUserData(res.payload.data.user));
      toastContainer("Followed user !", "success");
    } else {
      toastContainer("Error in following user !", "error");
    }
  };

  const unfollowHandler = async () => {
    const res = await dispatch(unfollowUser({ profileId, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      dispatch(setUserData(res.payload.data.user));
      toastContainer("Unfollowed user !", "success");
    } else {
      toastContainer("Error in unfollowing user !", "error");
    }
  };

  return (
    <div className="p-2 mt-2 flex flex-col items-center">
      <Image
        cloudName={process.env.REACT_APP_CLOUD_NAME}
        publicId={image}
        className="w-16 h-16 rounded-full md:w-28 md:h-28 object-cover"
      />
      <h1 className="text-2xl font-bold pt-4 text-red-400">{username}</h1>
      <p>{bio}</p>
      <a href="#" className="text-red-400 underline">
        {website}
      </a>
      {!profileId && (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center my-2"
          onClick={() => setShowEditProfile(!showEditProfile)}
        >
          Edit Profile
        </button>
      )}
      {profileId && (
        <>
          <button
            onClick={followHandler}
            type="button"
            className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center my-2 ${
              userData?.following?.some(
                (user) => user._id === Number(profileId)
              )
                ? "hidden"
                : ""
            }`}
          >
            Follow
          </button>
          <button
            onClick={unfollowHandler}
            type="button"
            className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center my-2 ${
              userData?.following?.some(
                (user) => user._id === Number(profileId)
              )
                ? ""
                : "hidden"
            }`}
          >
            Unfollow
          </button>
        </>
      )}
      <div className="inline-flex rounded-md shadow-sm">
        <button
          onClick={() => setShowFollowers(!showFollowers)}
          className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex flex-col">
            <p>{followers?.length}</p>
            <p>Followers</p>
          </div>
        </button>
        <button className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <div className="flex flex-col">
            <p>{userPosts?.length}</p>
            <p>Posts</p>
          </div>
        </button>
        <button
          onClick={() => setShowFollowing(!showFollowing)}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex flex-col">
            <p>{following?.length}</p>
            <p>Following</p>
          </div>
        </button>
      </div>
      {userPosts.length === 0 && (
        <h1 className="mt-4 text-lg">No Posts have been created !</h1>
      )}
      {userPosts.map((post) => {
        return (
          <div key={post._id} className="w-full">
            <Post post={post} />
          </div>
        );
      })}
      {showFollowers && (
        <FollowersModal
          followers={followers}
          setShowFollowers={setShowFollowers}
        />
      )}
      {showFollowing && (
        <FollowingModal
          following={following}
          setShowFollowing={setShowFollowing}
        />
      )}
      {showEditProfile && (
        <EditProfileModal
          setShowEditProfile={setShowEditProfile}
          userData={userData}
        />
      )}
    </div>
  );
};
