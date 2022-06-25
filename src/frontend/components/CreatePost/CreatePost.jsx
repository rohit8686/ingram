import { Image } from "cloudinary-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Picker from "emoji-picker-react";
import { createPost } from "../../thunks/postsThunks";
import { toastContainer } from "../../toast/toast";

export const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [imageData, setImageData] = useState({ imageURL: "", public_id: "" });

  const { encodedToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setPostText((prev) => prev + emojiObject.emoji);
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
            setImageData({
              imageURL: json.secure_url,
              public_id: json.public_id,
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
    <div className="flex gap-2 sm:gap-4 m-4">
      <Image
        cloudName="dxj7py6nj"
        publicId="https://res.cloudinary.com/dxj7py6nj/image/upload/v1655890516/ingram/profile_t8on9b.png"
        className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
      />
      <div className="flex flex-grow flex-col">
        <textarea
          name="post-text"
          id="post-text"
          cols="30"
          rows="4"
          placeholder="What's happening ?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="rounded-md flex-grow resize-none text-black p-2 bg-gray-100"
        ></textarea>
        {imageData.imageURL && (
          <>
            <div className="flex">
              <Image
                cloudName="dxj7py6nj"
                publicId={imageData.imageURL}
                className="w-28 h-28 object-cover mt-2"
              />
              <span
                className="material-icons-outlined cursor-pointer pt-2"
                onClick={() => setImageData({ imageURL: "", public_id: "" })}
              >
                close
              </span>
            </div>
          </>
        )}
        <div className="flex justify-between pt-2">
          <div>
            <label htmlFor="image-input" onChange={fileHandler}>
              <span className="material-icons-outlined cursor-pointer">
                image
              </span>
              <input
                type="file"
                name="image-input"
                id="image-input"
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
            className="bg-blue-500 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-white rounded text-sm block"
            onClick={() => {
              if (postText && postText.trim() !== "") {
                dispatch(
                  createPost({
                    postText,
                    postImage: imageData.imageURL,
                    encodedToken,
                  })
                );
                setPostText("");
                setImageData({ imageURL: "", public_id: "" });
              } else {
                toastContainer("Post cannot be empty !", "warning");
              }
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
