"use client";

import { createContext } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const FetchContext = createContext({});

export default function FetchProvider({ children, user, token }: any) {
  const router = useRouter();
  const userId = user?.id;

  const aboutUsRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/about-us`;
  const userRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/users`;
  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/seo`;
  const logRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/log`;
  const addressRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/address`;
  const addressSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/address/sort`;
  const positionRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/position`;
  const positionSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/position/sort`;
  const productRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/product`;
  const productStatusRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/product/status`;
  const productSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/product/sort`;
  const mainCategoryRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/category-main`;
  const mainCategorySortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/category-main/sort`;
  const subCategoryRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/category-sub`;
  const subCategorySortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/category-sub/sort`;
  const projectRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/project`;
  const projectSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/project/sort`;
  const trainingRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/training-course`;
  const calendarRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/calendar`;
  const bannerRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/banner`;
  const bannerSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/banner/sort`;
  const logoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/logo`;
  const contactFormRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact-forms`;
  const contactFormStatusRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact-forms/status`;

  const onFetchOne = async (type: any, id: any) => {
    let route = "";
    if (id) {
      if (type === "user") {
        route = `${userRoute}/${id}`;
      } else if (type === "address") {
        route = `${addressRoute}/${id}`;
      } else if (type === "position") {
        route = `${positionRoute}/${id}`;
      } else if (type === "product") {
        route = `${productRoute}/${id}`;
      } else if (type === "mainCategory") {
        route = `${mainCategoryRoute}/${id}`;
      } else if (type === "subCategory") {
        route = `${subCategoryRoute}/${id}`;
      } else if (type === "project") {
        route = `${projectRoute}/${id}`;
      } else if (type === "training") {
        route = `${trainingRoute}/${id}`;
      } else if (type === "calendar") {
        route = `${calendarRoute}/${id}`;
      } else if (type === "banner") {
        route = `${bannerRoute}/${id}`;
      } else if (type === "logo") {
        route = `${logoRoute}/${id}`;
      } else if (type === "about-us") {
        route = `${aboutUsRoute}?type=${id}`;
      }
    } else {
      if (type === "user") {
        route = userRoute;
      } else if (type === "seo") {
        route = seoRoute;
      } else if (type === "log") {
        route = logRoute;
      } else if (type === "address") {
        route = addressRoute;
      } else if (type === "position") {
        route = positionRoute;
      } else if (type === "product") {
        route = productRoute;
      } else if (type === "mainCategory") {
        route = mainCategoryRoute;
      } else if (type === "subCategory") {
        route = subCategoryRoute;
      } else if (type === "calendar") {
        route = calendarRoute;
      } else if (type === "banner") {
        route = bannerRoute;
      } else if (type === "home") {
        route = `${aboutUsRoute}?type=home`;
      }
    }
    try {
      const response = await fetch(route, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data;

      // console.log("Data received:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const onFetchPage = async (type: any, id: any, page: any, query: any) => {
    let route = "";
    if (id) {
      if (type === "user") {
        route = `${userRoute}/${id}`;
      } else if (type === "address") {
        route = `${addressRoute}/${id}`;
      } else if (type === "position") {
        route = `${positionRoute}/${id}`;
      } else if (type === "product") {
        route = `${productRoute}/${id}?page=${page}&${query}`;
      } else if (type === "mainCategory") {
        route = `${mainCategoryRoute}/${id}`;
      } else if (type === "subCategory") {
        route = `${subCategoryRoute}/${id}`;
      } else if (type === "project") {
        route = `${projectRoute}/${id}?page=${page}&${query}`;
      } else if (type === "training") {
        route = `${trainingRoute}/${id}?page=${page}&${query}`;
      } else if (type === "calendar") {
        route = `${calendarRoute}/${id}`;
      } else if (type === "banner") {
        route = `${bannerRoute}/${id}?page=${page}&${query}`;
      } else if (type === "contactForm") {
        route = `${contactFormRoute}/${id}?page=${page}&${query}`;
      }
    } else {
      if (type === "user") {
        route = userRoute;
      } else if (type === "seo") {
        route = seoRoute;
      } else if (type === "log") {
        route = logRoute;
      } else if (type === "address") {
        route = addressRoute;
      } else if (type === "position") {
        route = positionRoute;
      } else if (type === "product") {
        route = productRoute;
      } else if (type === "mainCategory") {
        route = mainCategoryRoute;
      } else if (type === "subCategory") {
        route = subCategoryRoute;
      } else if (type === "calendar") {
        route = calendarRoute;
      }
    }
    try {
      const response = await fetch(route, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data;

      // console.log("Data received:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const onSave = async (
    data: any,
    method: any,
    id: any,
    type: any,
    activity: any
  ): Promise<{ success: boolean; message: string }> => {
    let route = "";
    let modifiedData = { ...data };

    data?.image && delete modifiedData?.image;
    data?.gallery && delete modifiedData?.gallery;

    if (type == "address") {
      if (method.toUpperCase() == "PUT") {
        route = `${addressRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = addressRoute;
      }
    } else if (type == "position") {
      if (method.toUpperCase() == "PUT") {
        route = `${positionRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = positionRoute;
      }
    } else if (type == "mainCategory") {
      if (method.toUpperCase() == "PUT") {
        route = `${mainCategoryRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = mainCategoryRoute;
      }
    } else if (type == "subCategory") {
      if (method.toUpperCase() == "PUT") {
        route = `${subCategoryRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = subCategoryRoute;
      }
    } else if (type == "product") {
      if (method.toUpperCase() == "PUT") {
        route = `${productRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = productRoute;
      }
    } else if (type == "project") {
      if (method.toUpperCase() == "PUT") {
        route = `${projectRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = projectRoute;
      }
    } else if (type == "calendar") {
      if (method.toUpperCase() == "PUT") {
        route = `${calendarRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = calendarRoute;
      }
    } else if (type == "training") {
      if (method.toUpperCase() == "PUT") {
        route = `${trainingRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = trainingRoute;
      }
    } else if (type == "user") {
      if (method.toUpperCase() == "PUT") {
        route = `${userRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = userRoute;
      }
    } else if (type == "seo") {
      if (method.toUpperCase() === "PUT") {
        route = `${seoRoute}/${id}`;
      }
    } else if (type == "banner") {
      if (method.toUpperCase() === "PUT") {
        route = `${bannerRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = bannerRoute;
      }
    } else if (type == "logo") {
      if (method.toUpperCase() === "PUT") {
        route = `${logoRoute}/${id}`;
      }
    } else if (type == "home") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=home`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=home`;
      }
    } else if (type == "about-us") {
      if (method.toUpperCase() === "PUT") {
        route = aboutUsRoute;
      }
    } else if (type == "product-sell") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=product-sell`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=product-sell`;
      }
    }  else if (type == "product-rent") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=product-rent`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=product-rent`;
      }
    }  else if (type == "product-sale") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=product-sale`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=product-sale`;
      }
    }  else if (type == "other-training") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=other-training`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=other-training`;
      }
    }  else if (type == "other-inspection") {
      if (method.toUpperCase() == "PUT") {
        route = `${aboutUsRoute}?type=other-inspection`;
      } else if (method?.toUpperCase() == "POST") {
        route = `${aboutUsRoute}?type=other-inspection`;
      }
    } 

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "border-2 border-green-600 rounded-xl p-4 text-green-600 font-bold mx-1",
        cancelButton: "bg-red rounded-xl p-4 text-white font-bold",
      },
      buttonsStyling: false,
    });

    return new Promise((resolve, reject) => {
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Save Changes!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await fetch(`${route}`, {
                method: method?.toUpperCase(),
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(modifiedData),
              });

              const res = await response?.json();

              if (res?.error) {
                let msg = res?.error?.message;
                // error message conditions
                if (res?.error?.message.includes("`serviceUrl` to be unique")) {
                  msg = "Service URL has been used!, try a new one.";
                } else if (
                  res.error.message.includes("`username` to be unique")
                ) {
                  msg = `This username is already registered.`;
                } else if (res.error.message.includes("`email` to be unique")) {
                  msg = `This email is already registered.`;
                }
                Swal.fire({
                  position: "top-right",
                  toast: true,
                  icon: "error",
                  title: msg,
                  showConfirmButton: false,
                  timer: 2500,
                });
                reject({ success: false, message: msg });
              } else {
                const logRes = await onInsertLog(
                  res?.id,
                  userId,
                  type,
                  `${user?.username}-${activity}`
                );
                //  @ts-ignore
                if (!logRes?.error) {
                  // upload image
                  if (data?.image) {
                    let imgRoute = route;
                    if (method?.toUpperCase() == "POST") {
                      imgRoute = `${route}/${res?.id}`;
                    }

                    await onUploadImage("image", data?.image, "PUT", imgRoute);
                  }
                  if (data?.gallery) {
                    let imgRoute = route;

                    if (method?.toUpperCase() == "POST") {
                      imgRoute = `${route}/${res?.id}`;
                    }

                    await onUploadImage(
                      "gallery",
                      data?.gallery,
                      "PUT",
                      imgRoute
                    );
                  }

                  Swal.fire({
                    position: "top-right",
                    toast: true,
                    icon: "success",
                    title: "Your Changes have been saved!",
                    showConfirmButton: false,
                    timer: 2500,
                  });

                  if (method?.toUpperCase() === "POST") {
                    if (type === "service") {
                      setTimeout(() => {
                        router.push(`/webpanel/service/edit/${res?.id}`);
                      }, 2000);
                    } else if (type === "user") {
                      setTimeout(() => {
                        router.push("/webpanel/settings/user");
                      }, 2000);
                    } else if (type === "address") {
                      setTimeout(() => {
                        router.push("/webpanel/contact");
                      }, 2000);
                    } else if (type === "subject") {
                      setTimeout(() => {
                        router.push("/webpanel/contact");
                      }, 2000);
                    } else if (type == "position") {
                      setTimeout(() => {
                        router.push("/webpanel/career");
                      }, 2000);
                    } else if (
                      type == "mainCategory" ||
                      type == "subCategory" ||
                      type == "product"
                    ) {
                      setTimeout(() => {
                        router.push("/webpanel/product");
                      }, 2000);
                    } else if (type == "project") {
                      setTimeout(() => {
                        router.push("/webpanel/project");
                      }, 2000);
                    }
                  } else if (method?.toUpperCase() === "PUT") {
                    if (type === "user") {
                      setTimeout(() => {
                        router.push("/webpanel/settings/user");
                      }, 2000);
                    }
                    if (type === "address") {
                      setTimeout(() => {
                        router.push("/webpanel/contact");
                      }, 2000);
                    } else if (type === "subject") {
                      setTimeout(() => {
                        router.push("/webpanel/contact");
                      }, 2000);
                    } else if (type == "position") {
                      setTimeout(() => {
                        router.push("/webpanel/career");
                      }, 2000);
                    } else if (
                      type == "mainCategory" ||
                      type == "subCategory" ||
                      type == "product"
                    ) {
                      setTimeout(() => {
                        router.push("/webpanel/product");
                      }, 2000);
                    } else if (type == "project") {
                      setTimeout(() => {
                        router.push("/webpanel/project");
                      }, 2000);
                    }
                  }
                  resolve({ success: true, message: "ok" });
                } else {
                  reject({ success: false, message: "Log insertion failed" });
                }
              }
            } catch (err) {
              console.log(err);
              reject({ success: false, message: "An error occurred" });
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your changes were cancelled! :)",
              icon: "error",
            });
            resolve({ success: false, message: "Cancelled by user" });
          }
        });
    });
  };

  const onUploadImage = async (
    type: any,
    image: any,
    method: any,
    route: any
  ) => {
    // @ts-ignore

    const formData = new FormData();

    if (type == "image") {
      formData.append(type, image);
    } else {
      for (let i = 0; i < image.length; i++) {
        formData.append(type, image[i]);
      }
    }

    try {
      // Use fetch to send the form data to the server
      const response = await fetch(`${route}`, {
        method: method,
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to Upload Image");
      }
      const result = await response.json();
      console.log("Success:", result);
      // Call onSave if necessary (depends on your implementation)
      // onSave(result, 'PUT', id, 'mainCategory', `Edit Main Category ${data?.nameTH}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChangeStatus = async (
    status: any,
    id: any,
    type: any,
    activity: any
  ) => {
    let route = "";
    if (type == "project") {
      route = `${projectRoute}/${id}`;
    } else if (type == "product") {
      route = `${productStatusRoute}/${id}`;
    } else if (type == "training") {
      route = `${trainingRoute}/${id}`;
    } else if (type == "banner") {
      route = `${bannerRoute}/${id}`;
    } else if (type == "contact-form") {
      route = `${contactFormStatusRoute}/${id}`;
    }
    try {
      const response = await fetch(route, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ status: status }),
      });

      onInsertLog(id, userId, type, activity);
    } catch (err) {
      console.log(err);
    }
  };

  const onSort = async (order: any, id: any, type: any, activity: any) => {
    let route = "";

    if (type == "address") {
      route = `${addressSortRoute}/${id}`;
    } else if (type == "position") {
      route = `${positionSortRoute}/${id}`;
    } else if (type == "product") {
      route = `${productSortRoute}/${id}`;
    } else if (type == "subCategory") {
      route = `${subCategorySortRoute}/${id}`;
    } else if (type == "mainCategory") {
      route = `${mainCategorySortRoute}/${id}`;
    } else if (type == "project") {
      route = `${projectSortRoute}/${id}`;
    } else if (type == "banner") {
      route = `${bannerSortRoute}/${id}`;
    }

    try {
      const response = await fetch(route, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ sort: order }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onInsertLog = async (
    itemId: any,
    userId: any,
    type: any,
    activity: any
  ) => {
    const data = {
      itemId,
      userId,
      type,
      activity,
    };

    const logRes = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/log/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    return await logRes.json();
  };

  const onDelete = async (id: any, type: any, activity: any) => {
    let route = "";

    if (type === "position") {
      route = `${positionRoute}/${id}`;
    } else if (type === "user") {
      route = `${userRoute}/${id}`;
    } else if (type === "address") {
      route = `${addressRoute}/${id}`;
    } else if (type === "mainCategory") {
      route = `${mainCategoryRoute}/${id}`;
    } else if (type === "subCategory") {
      route = `${subCategoryRoute}/${id}`;
    } else if (type === "product") {
      route = `${productRoute}/${id}`;
    } else if (type === "project") {
      route = `${projectRoute}/${id}`;
    } else if (type === "training") {
      route = `${trainingRoute}/${id}`;
    } else if (type === "calendar") {
      route = `${calendarRoute}/${id}`;
    } else if (type === "banner") {
      route = `${bannerRoute}/${id}`;
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "border-2 border-green-600 rounded-xl p-4 text-green-600 font-bold mx-1",
        cancelButton: "bg-red rounded-xl p-4 text-white font-bold",
      },
      buttonsStyling: false,
    });

    return swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete Item!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // try {
          const response = await fetch(route, { method: "DELETE" });

          const res = await response.json();

          if (res?.error) {
            const msg = res?.error?.message;
            Swal.fire({
              position: "top-right",
              toast: true,
              icon: "error",
              title: msg,
              showConfirmButton: false,
              timer: 2500,
            });
            return { error: true, message: msg };
          } else {
            const logRes = await onInsertLog(
              id,
              userId,
              type,
              `${user?.username}-${activity}: ${id}`
            );

            if (!logRes?.error) {
              Swal.fire({
                position: "top-right",
                toast: true,
                icon: "success",
                title: "Your changes have been saved!",
                showConfirmButton: false,
                timer: 2500,
              });
              return { success: true, message: "ok" };
            } else {
              Swal.fire({
                position: "top-right",
                toast: true,
                icon: "error",
                title: "Log insertion failed",
                showConfirmButton: false,
                timer: 2500,
              });
              return { error: true, message: "Log insertion failed" };
            }
          }
          // }
          // catch (err) {
          //   console.log("Error during onDelete:", err);
          //   Swal.fire({
          //     position: "top-right",
          //     toast: true,
          //     icon: "error",
          //     title: "An unexpected error occurred",
          //     showConfirmButton: false,
          //     timer: 2500,
          //   });
          //   return { error: true, message: "An unexpected error occurred" };
          // }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You cancelled the changes! :)",
            icon: "error",
          });
          return { error: true, message: "Cancelled by user" };
        }
      });
  };

  const onDeleteGallery = async (
    id: any,
    type: any,
    position: any,
    activity: any
  ) => {
    let route = "";

    if (type === "product") {
      route = `${productRoute}/gallery/${position}/${id}`;
    } else if (type === "project") {
      route = `${projectRoute}/gallery/${position}/${id}`;
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "border-2 border-green-600 rounded-xl p-4 text-green-600 font-bold mx-1",
        cancelButton: "bg-red rounded-xl p-4 text-white font-bold",
      },
      buttonsStyling: false,
    });

    return swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete Item!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(route, { method: "DELETE" });
            const res = await response.json();

            if (res?.error) {
              const msg = res?.error?.message;
              Swal.fire({
                position: "top-right",
                toast: true,
                icon: "error",
                title: msg,
                showConfirmButton: false,
                timer: 2500,
              });
              return { error: true, message: msg };
            } else {
              const logRes = await onInsertLog(
                id,
                userId,
                type,
                `${user?.username}-${activity}: ${id}`
              );

              if (!logRes?.error) {
                Swal.fire({
                  position: "top-right",
                  toast: true,
                  icon: "success",
                  title: "Your changes have been saved!",
                  showConfirmButton: false,
                  timer: 2500,
                });
                return { success: true, message: "ok" };
              } else {
                Swal.fire({
                  position: "top-right",
                  toast: true,
                  icon: "error",
                  title: "Log insertion failed",
                  showConfirmButton: false,
                  timer: 2500,
                });
                return { error: true, message: "Log insertion failed" };
              }
            }
          } catch (err) {
            console.log("Error during onDelete:", err);
            Swal.fire({
              position: "top-right",
              toast: true,
              icon: "error",
              title: "An unexpected error occurred",
              showConfirmButton: false,
              timer: 2500,
            });
            return { error: true, message: "An unexpected error occurred" };
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You cancelled the changes! :)",
            icon: "error",
          });
          return { error: true, message: "Cancelled by user" };
        }
      });
  };

  return (
    <FetchContext.Provider
      value={{
        onSave,
        onFetchOne,
        onFetchPage,
        onInsertLog,
        onChangeStatus,
        onSort,
        onDelete,
        onDeleteGallery,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
