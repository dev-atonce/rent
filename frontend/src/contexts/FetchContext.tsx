"use client";

import { createContext } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const FetchContext = createContext({});

export default function FetchProvider({ children, user, token }: any) {
  const router = useRouter();
  const userId = user?.id;

  const serviceRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/service`;
  const serviceSeoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/service/seo`;
  const serviceSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/service/sort`;
  const serviceStatusRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/service/status`;
  const userRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/users`;
  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/seo`;
  const logRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/log`;
  const addressRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact`;
  const addressSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/contact/sort`;
  const subjectRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/subject`;
  const subjectSortRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/webpanel/subject/sort`;
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
  const onFetchOne = async (type: any, id: any) => {
    let route = "";
    if (id) {
      if (type === "service") {
        route = `${serviceRoute}/${id}`;
      } else if (type === "user") {
        route = `${userRoute}/${id}`;
      } else if (type === "address") {
        route = `${addressRoute}/${id}`;
      } else if (type === "subject") {
        route = `${subjectRoute}/${id}`;
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
      }
    } else {
      if (type === "service") {
        route = serviceRoute;
      } else if (type === "user") {
        route = userRoute;
      } else if (type === "seo") {
        route = seoRoute;
      } else if (type === "log") {
        route = logRoute;
      } else if (type === "address") {
        route = addressRoute;
      } else if (type === "subject") {
        route = subjectRoute;
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
          Authorization: `Bearer ${token}`,
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
      if (type === "service") {
        route = `${serviceRoute}/${id}`;
      } else if (type === "user") {
        route = `${userRoute}/${id}`;
      } else if (type === "address") {
        route = `${addressRoute}/${id}`;
      } else if (type === "subject") {
        route = `${subjectRoute}/${id}`;
      } else if (type === "position") {
        route = `${positionRoute}/${id}`;
      } else if (type === "product") {
        route = `${productRoute}/${id}?page=${page}&${query}`;
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
      }
    } else {
      if (type === "service") {
        route = serviceRoute;
      } else if (type === "user") {
        route = userRoute;
      } else if (type === "seo") {
        route = seoRoute;
      } else if (type === "log") {
        route = logRoute;
      } else if (type === "address") {
        route = addressRoute;
      } else if (type === "subject") {
        route = subjectRoute;
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
          Authorization: `Bearer ${token}`,
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

    if (type == "service") {
      if (method.toUpperCase() == "PUT") {
        route = `${serviceRoute}/${id}`;
      } else if (method.toUpperCase() == "POST") {
        route = serviceRoute;
      }
    } else if (type == "address") {
      if (method.toUpperCase() == "PUT") {
        route = `${addressRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = addressRoute;
      }
    } else if (type == "subject") {
      if (method.toUpperCase() == "PUT") {
        route = `${subjectRoute}/${id}`;
      } else if (method?.toUpperCase() == "POST") {
        route = subjectRoute;
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
    } else if (type == "serviceSeo") {
      route = `${serviceSeoRoute}/${id}`;
    } else if (type == "serviceSort") {
      route = `${serviceSortRoute}/${id}`;
    } else if (type == "serviceStatus") {
      route = `${serviceStatusRoute}/${id}`;
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

  // const onSave = (
  //   data: any,
  //   method: any,
  //   id: any,
  //   type: any,
  //   activity: any
  // ) => {
  //   let route = "";
  //   let modifiedData = { ...data };

  //   data?.image && delete modifiedData?.image;
  //   data?.gallery && delete modifiedData?.gallery;

  //   if (type == "service") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${serviceRoute}/${id}`;
  //     } else if (method.toUpperCase() == "POST") {
  //       route = serviceRoute;
  //     }
  //   } else if (type == "address") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${addressRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = addressRoute;
  //     }
  //   } else if (type == "subject") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${subjectRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = subjectRoute;
  //     }
  //   } else if (type == "position") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${positionRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = positionRoute;
  //     }
  //   } else if (type == "mainCategory") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${mainCategoryRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = mainCategoryRoute;
  //     }
  //   } else if (type == "subCategory") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${subCategoryRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = subCategoryRoute;
  //     }
  //   } else if (type == "product") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${productRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = productRoute;
  //     }
  //   } else if (type == "project") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${projectRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = projectRoute;
  //     }
  //   } else if (type == "calendar") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${calendarRoute}/${id}`;
  //       // } else if (method?.toUpperCase() == "POST") {
  //       //   route = calendarRoute;
  //       // }
  //       // }
  //     }
  //   } else if (type == "serviceSeo") {
  //     route = `${serviceSeoRoute}/${id}`;
  //   } else if (type == "serviceSort") {
  //     route = `${serviceSortRoute}/${id}`;
  //   } else if (type == "serviceStatus") {
  //     route = `${serviceStatusRoute}/${id}`;
  //   } else if (type == "user") {
  //     if (method.toUpperCase() == "PUT") {
  //       route = `${userRoute}/${id}`;
  //     } else if (method?.toUpperCase() == "POST") {
  //       route = userRoute;
  //     }
  //   } else if (type == "seo") {
  //     if (method.toUpperCase() === "PUT") {
  //       route = `${seoRoute}/${id}`;
  //     }
  //   }

  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton:
  //         "border-2 border-green-600 rounded-xl p-4 text-green-600 font-bold mx-1",
  //       cancelButton: "bg-red rounded-xl p-4 text-white font-bold",
  //     },
  //     buttonsStyling: false,
  //   });
  //   swalWithBootstrapButtons
  //     .fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, Save Changes!",
  //       cancelButtonText: "No, cancel!",
  //       reverseButtons: true,
  //     })
  //     .then(async (result) => {
  //       if (result.isConfirmed) {
  //         try {
  //           const response = await fetch(`${route}`, {
  //             method: method?.toUpperCase(),
  //             headers: {
  //               "Content-Type": "application/json",
  //             },

  //             body: JSON.stringify(modifiedData),
  //           });

  //           const res = await response?.json();

  //           if (res?.error) {
  //             let msg = res?.error?.message;
  //             // error message conditions
  //             if (res?.error?.message.includes("`serviceUrl` to be unique")) {
  //               msg = "Service URL has been used!, try a new one.";
  //             } else if (
  //               res.error.message.includes("`username` to be unique")
  //             ) {
  //               msg = `This username is already registered.`;
  //             } else if (res.error.message.includes("`email` to be unique")) {
  //               msg = `This email is already registered.`;
  //             }
  //             Swal.fire({
  //               position: "top-right",
  //               toast: true,
  //               icon: "error",
  //               title: msg,
  //               showConfirmButton: false,
  //               timer: 2500,
  //             });
  //           } else {
  //             const logRes = onInsertLog(
  //               res?.id,
  //               userId,
  //               type,
  //               `${user?.username}-${activity}`
  //             );
  //             //  @ts-ignore
  //             if (!logRes?.error) {
  //               // upload image
  //               if (data?.image) {
  //                 let imgRoute = route;
  //                 if (method?.toUpperCase() == "POST") {
  //                   imgRoute = `${route}/${res?.id}`;
  //                 }

  //                 await onUploadImage("image", data?.image, "PUT", imgRoute);
  //               }
  //               if (data?.gallery) {
  //                 let imgRoute = route;

  //                 if (method?.toUpperCase() == "POST") {
  //                   imgRoute = `${route}/${res?.id}`;
  //                 }

  //                 await onUploadImage(
  //                   "gallery",
  //                   data?.gallery,
  //                   "PUT",
  //                   imgRoute
  //                 );
  //               }

  //               Swal.fire({
  //                 position: "top-right",
  //                 toast: true,
  //                 icon: "success",
  //                 title: "Your Changes have been saved!",
  //                 showConfirmButton: false,
  //                 timer: 2500,
  //               });

  //               if (method?.toUpperCase() === "POST") {
  //                 if (type === "service") {
  //                   setTimeout(() => {
  //                     router.push(`/webpanel/service/edit/${res?.id}`);
  //                   }, 2000);
  //                 } else if (type === "user") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/settings/user");
  //                   }, 2000);
  //                 } else if (type === "address") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/contact");
  //                   }, 2000);
  //                 } else if (type === "subject") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/contact");
  //                   }, 2000);
  //                 } else if (type == "position") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/career");
  //                   }, 2000);
  //                 } else if (
  //                   type == "mainCategory" ||
  //                   type == "subCategory" ||
  //                   type == "product"
  //                 ) {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/product");
  //                   }, 2000);
  //                 } else if (type == "project") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/project");
  //                   }, 2000);
  //                 }
  //               } else if (method?.toUpperCase() === "PUT") {
  //                 if (type === "user") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/settings/user");
  //                   }, 2000);
  //                 }
  //                 if (type === "address") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/contact");
  //                   }, 2000);
  //                 } else if (type === "subject") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/contact");
  //                   }, 2000);
  //                 } else if (type == "position") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/career");
  //                   }, 2000);
  //                 } else if (
  //                   type == "mainCategory" ||
  //                   type == "subCategory" ||
  //                   type == "product"
  //                 ) {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/product");
  //                   }, 2000);
  //                 } else if (type == "project") {
  //                   setTimeout(() => {
  //                     router.push("/webpanel/project");
  //                   }, 2000);
  //                 }
  //               }
  //               return { success: true, message: "ok" };
  //             }
  //             return { success: true, message: "ok" };
  //           }
  //           return { success: true, message: "ok" };
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       } else if (
  //         /* Read more about handling dismissals below */
  //         result.dismiss === Swal.DismissReason.cancel
  //       ) {
  //         swalWithBootstrapButtons.fire({
  //           title: "Cancelled",
  //           text: "Your Cancelled the changes! :)",
  //           icon: "error",
  //         });
  //       }
  //     });
  // };

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

    if (type == "service") {
      route = `${serviceSortRoute}/${id}`;
    } else if (type == "address") {
      route = `${addressSortRoute}/${id}`;
    } else if (type == "subject") {
      route = `${subjectSortRoute}/${id}`;
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
    } else if (type === "service") {
      route = `${serviceRoute}/${id}`;
    } else if (type === "subject") {
      route = `${subjectRoute}/${id}`;
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
          console.log(res);

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
