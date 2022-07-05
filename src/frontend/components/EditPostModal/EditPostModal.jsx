import { Image } from "cloudinary-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Picker from "emoji-picker-react";
import { editPost } from "../../thunks/postsThunks";
import { toastContainer } from "../../toast/toast";

export const EditPostModal = ({ setShowEditPostModal, post }) => {
  const { _id, content, image } = post;
  const [postText, setPostText] = useState(content.postText);
  const [showEmoji, setShowEmoji] = useState(false);
  const [editImageData, setEditImageData] = useState({
    imageURL: content.postImage,
  });
  const { encodedToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setPostText((prev) => prev + emojiObject.emoji);
  };

  const editPostHandler = async (_id) => {
    if (postText && postText.trim() !== "") {
      const res = await dispatch(
        editPost({
          postText,
          postImage: editImageData.imageURL,
          encodedToken,
          _id,
        })
      );
      if ([200, 201].includes(res.payload.status)) {
        toastContainer("Post edited !", "success");
        setShowEditPostModal((prev) => !prev);
      } else {
        toastContainer("Post editing error !", "error");
      }
    } else {
      toastContainer("Post cannot be empty !", "warning");
    }
  };

  const fileHandler = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    (async () => {
      if (event.target.files[0].size < 2000000) {
        await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          requestOptions
        )
          .then((response) => response.json())
          .then((json) => {
            setEditImageData({
              imageURL: json.secure_url,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        toastContainer("File Size cannot be greater than 2mb !", "error");
      }
    })();
  };

  return (
    <>
      <div className="fixed text-black top-0 left-0 z-10 w-full h-screen flex justify-center items-center">
        <div className="bg-gray-700 w-5/6 sm:w-1/2 md:w-2/5 mx-auto rounded-xl p-4 text-white overflow-auto scrollbar">
          <div className="flex justify-between border-b-2 border-red-500">
            <h1 className="text-lg font-bold ">Edit Post</h1>
            <span
              className="material-icons-outlined cursor-pointer"
              onClick={() => setShowEditPostModal((prev) => !prev)}
            >
              close
            </span>
          </div>
          <div className="flex gap-1 sm:gap-2 m-4">
            <Image
              cloudName="dxj7py6nj"
              publicId={image}
              className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
            />
            <div className="flex flex-grow flex-col">
              <textarea
                name="post-text"
                id="post-text"
                rows="4"
                placeholder="What's happening ?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="rounded-md flex-grow resize-none text-black p-2 bg-gray-100"
              ></textarea>
              {editImageData.imageURL && (
                <>
                  <div className="flex">
                    <Image
                      cloudName="dxj7py6nj"
                      publicId={editImageData.imageURL}
                      className="w-28 h-28 object-cover mt-2"
                    />
                    <span
                      className="material-icons-outlined cursor-pointer pt-2"
                      onClick={() =>
                        setEditImageData({ imageURL: "", public_id: "" })
                      }
                    >
                      close
                    </span>
                  </div>
                </>
              )}
              <div className="flex justify-between pt-2">
                <div>
                  <label htmlFor="edit-image-input" onChange={fileHandler}>
                    <span className="material-icons-outlined cursor-pointer">
                      image
                    </span>
                    <input
                      type="file"
                      name="edit-image-input"
                      id="edit-image-input"
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                  &nbsp;
                  <span
                    className="material-icons-outlined cursor-pointer"
                    onClick={() => setShowEmoji(!showEmoji)}
                  >
                    emoji_emotions
                  </span>
                  {showEmoji && (
                    <div className="absolute z-10">
                      <Picker
                        onEmojiClick={onEmojiClick}
                        className="picker"
                        pickerStyle={{
                          height: "250px",
                          width: "250px",
                          color: "black",
                        }}
                      />
                    </div>
                  )}
                </div>
                <button
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
                  onClick={() => editPostHandler(_id)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
