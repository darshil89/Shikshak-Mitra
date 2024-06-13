"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { trpc } from "../../../../trpc-client/client";

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
        console.log(uploadImageData);
        setUploadedImageUrls(uploadImageData.secure_url);
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
    e : FormEvent<HTMLFormElement>,
   courseId: string,
    classId: string
  ) => {
    e.preventDefault();
    if (uploadedImageUrls) {
      // Handle file upload logic here
      console.log("ja rha hai");

      console.log(uploadedImageUrls);

      try {
        const res = await fetch("http://127.0.0.1:8000/get_attendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ link: uploadedImageUrls }),
        }).then((res) => res.json());

        console.log(res);

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
            &times;
          </button>
        </div>
        <form onSubmit={(e)=> handleUpload (e, courseId, classId )}>
          <label className="text-gray-700 font-medium">Upload Image</label>
          <input
            type="file"
            className="border border-gray-300 p-2 w-full mb-4"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imageUrl && (
            <div className="mt-4 mb-4">
              <img
                src={imageUrl as string}
                alt="Uploaded"
                className="max-w-full h-auto"
              />
            </div>
          )}

          <label className="text-gray-700 font-medium">Upload Notes</label>
          <input
            type="file"
            className="border border-gray-300 p-2 w-full mb-4"
            placeholder="Upload Notes"
            accept="application/pdf"
            onChange={handleNotesChange}
          />
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
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
