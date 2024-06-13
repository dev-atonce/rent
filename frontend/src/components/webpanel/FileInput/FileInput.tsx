"use client";
import ImageComponent from "@/components/common/ImageComponent/ImageComponent";
import { useState } from "react";
import Swal from "sweetalert2";

export default function FileInput({
  path,

  setState,
  state,
  objectState,
  keyProp,
  multiple,
  label,
  ratio,
  height,
  uploadAmount,
}: any) {
  const [file, setFile] = useState<File[]>([]);
  const [singleFile, setSingleFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const onBrowseImage = (e: any) => {
    if (multiple) {
      let file1: File[] = [];
      for (let i = 0; i < e.target.files?.length; i++) {
        if (uploadAmount) {
          if (i < uploadAmount) {
            file1.push(e.target.files?.[i]);
          }
        } else {
          file1.push(e.target.files?.[i]);
        }
      }
      // setFile(file1);

      setState(file1, keyProp);
    } else {
      //   setSingleFile(e.target.files?.[0]);
      //   setState((prev: any) => ({ ...prev, ["abc"]: e.target.files?.[0] }));

      setState(e.target.files?.[0], keyProp);
    }

    imageChange(e);
  };

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      if (multiple) {
        if (uploadAmount) {
          setSelectedImages(
            // @ts-ignore
            Object.values(e.target.files).filter(
              (i: any, index: any) => index < uploadAmount
            )
          );
        } else {
          setSelectedImages(Object.values(e.target.files));
        }
      } else {
        setSelectedImage(e.target.files[0]);
      }
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file && !singleFile) {
      ("no file");
      return;
    } else if (multiple) {
      let images = [];
      // file tbd
      for (let i = 0; i < file?.length; i++) {
        try {
          const data = new FormData();
          data.set("file", file[i]);

          const res = await fetch(`/api/${path}`, {
            method: "POST",
            body: data,
          });

          // handle the error
          if (!res.ok) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Oops...",
              text: "Please enter valid inputs!",
              timer: 1500,
            });
            throw new Error(await res.text());
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "New Image has been uploaded",
              showConfirmButton: false,
              timer: 1500,
            });
            // response return
            const response = await res.json();
            images.push(response.image);
          }
        } catch (e: any) {
          // Handle errors here
          console.error(e);
        }
        images;
        objectState
          ? setState({ ...state, [keyProp]: images })
          : setState([...state, ...images]);
        // fix later for single file
      }
    } else {
      try {
        const data = new FormData();
        singleFile && data.set("file", singleFile);

        const res = await fetch(`/api/${path}`, {
          method: "POST",
          body: data,
        });

        // handle the error
        if (!res.ok) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "Please enter valid inputs!",
            timer: 1500,
          });
          throw new Error(await res.text());
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Image has been uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
          // response return
          const response = await res.json();
          objectState
            ? setState({ ...state, [keyProp]: response.image })
            : setState(response.image);
        }
      } catch (e: any) {
        // Handle errors here
        console.error(e);
      }
    }
  };

  return (
    <>
      <div className="mb-2">
        <label className="mb-2 block text-sm font-medium text-black dark:text-white">
          {label}
        </label>
        {!multiple ? (
          <div
            className={`bg-slate-100  mb-2  rounded-md overflow-hidden`}
            style={{ height: height, aspectRatio: ratio }}
          >
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                className="h-full w-full object-cover"
              />
            ) : state[keyProp] ? (
              <img
                src={"/img/about_1.png"}
                // src={`http://192.168.0.199:3000/public/uploads/categoryMain/1717060703795-dmk.png`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-slate-200 flex">
                <h5 className="text-center my-auto mx-auto text-slate-400 text-3xl">
                  {label}
                </h5>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2 flex-wrap">
            {selectedImages &&
              selectedImages.map((i: any, index: any) => (
                <div
                  key={index}
                  className={`bg-slate-100  mb-2  rounded-md overflow-hidden`}
                  style={{ height: height, aspectRatio: ratio }}
                >
                  <img
                    key={index}
                    src={URL.createObjectURL(i)}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
          </div>
        )}
        <input
          multiple={multiple}
          //   name="file"
          id="formFile"
          onChange={onBrowseImage}
          type="file"
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
        />
      </div>

      {/* <form onSubmit={onSubmit} className="w-full">
        <input
          className="relative m-0 mb-2 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          name="file"
          id="formFile"
          onChange={onBrowseImage}
          multiple
        />

        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="hover:bg-success-600 focus:bg-success-600 active:bg-success-700 inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            Upload
          </button>
        </div>
      </form> */}
    </>
  );
}
