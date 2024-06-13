"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { trpc } from "../../../../trpc-client/client";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

interface ModalProps {
  handleClose: () => void;
  courseId: string;
  classId: string;
}

const Modal: React.FC<ModalProps> = ({ handleClose, courseId, classId }) => {
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  //state for uploading notes
  const [localNotesUrl, setLocalNotesUrl] = useState<string>("");
  const [notesPublicUrl, setNotesPublicUrl] = useState<File | null>(null);

  //make an array of strings
  const [answers, setAnswers] = useState<string[]>([]);

  //method to handle the image upload
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "jx3jfkqs");

      try {
        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const uploadImageData = await uploadResponse.json();
        setUploadedImageUrls(uploadImageData.secure_url);
        console.log(uploadImageData.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  //method to handle the notes upload
  const handleNotesChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLocalNotesUrl(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "jx3jfkqs");

      try {
        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const uploadImageData = await uploadResponse.json();
        setNotesPublicUrl(uploadImageData.secure_url);
        console.log(uploadImageData.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleUpload = async (
    e: FormEvent<HTMLFormElement>,
    courseId: string,
    classId: string
  ) => {
    e.preventDefault();
    if (uploadedImageUrls) {
      // Handle file upload logic here

      console.log(uploadedImageUrls);

      try {
        const res = await fetch("http://127.0.0.1:8000/get_attendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ link: uploadedImageUrls }),
        }).then((res) => res.json());

        // convert this res array to object to array of string
        // getting the names of the students from ai model and storing it in the answers array
        const names = res.map((obj: any) => obj.Name);
        setAnswers(names);

        console.log(names);

        // calling the mark attendance function to mark the attendance

        // const date = new Date();

        // const students = answers;

        // mutate({ date, classId, courseId, students });

        alert("Attendance and Notes uploaded successfully");

        handleClose();
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const { data, mutate, isSuccess } =
    trpc.TeacherRouter.markAttendance.useMutation();

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-500 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Upload Details </h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={handleClose}
          >
            <RxCross1 size={25} />
          </button>
        </div>
        <form onSubmit={(e) => handleUpload(e, courseId, classId)}>
          {!imageUrl && (
            <>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Attendance Image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border mb-2 p-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          )}

          {imageUrl && (
            <div className="mt-4 mb-4">
              <Image
                src={imageUrl as string}
                alt="Uploaded"
                width={200}
                height={200}
              />
            </div>
          )}

          {!localNotesUrl && (
            <>
              <div className="flex items-center justify-center w-full mb-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload </span>
                      notes
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF (MAX. 100 MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="application/pdf"
                    onChange={handleNotesChange}
                  />
                </label>
              </div>
            </>
          )}

          {localNotesUrl && (
            <embed
              src={localNotesUrl}
              type="application/pdf"
              width="100%"
              height="400px"
              className="mb-5"
            />
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
