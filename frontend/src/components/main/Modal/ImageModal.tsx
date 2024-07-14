"use client"
import {
  ModalContent,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button
} from "@nextui-org/react";

import { useState } from "react";
import { MdCloudUpload, MdArrowBackIos, MdOutlineSearch, MdRefresh } from "react-icons/md";

const mediaImages = [
  {"src":"Rectangle 114.png","alt":"Rectangle 114"},
  {"src":"Rectangle 136.png","alt":"Rectangle 136"},
  {"src":"Rectangle 137.png","alt":"Rectangle 137"},
  {"src":"Rectangle 138.png","alt":"Rectangle 138"},
  {"src":"Rectangle 139.png","alt":"Rectangle 139"},
  {"src":"Rectangle 147.png","alt":"Rectangle 147"},
];

 
export default function ImageModal({imgVisible, closeImgHandler, title, select}:any)
{
    const [selectedImage, setSelectedImage] = useState<any>('');
    const [imgTitile, setImgTitle] = useState<Boolean>(true);
    const handleFileUpload = (e:any) => {
      if (e.target.files && e.target.files.length > 0) {
        let arr = [];
        for (const file of e.target.files) {
          arr.push({
            'src':URL.createObjectURL(file),
            'name':file.name,
            'size':file.size,
          });
        }
        setSelectedImage(arr);
      }
    }
    function removeElementAt(index:any) {
      let frontPart = selectedImage.slice(0, index);
      let lastPart  = selectedImage.slice( index + 1 ); // index to end of array
      setSelectedImage([...frontPart, ...lastPart]);
   }

    const formatFileSize = function (bytes:any) {
        const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
    };
    const SetImageTitle = (e:any) => {
      let change = e.currentTarget.checked == true ? false : true;
      setImgTitle(change);
    }

    return <>
      <Modal 
          id="imgModal"
          isOpen={imgVisible} 
          onOpenChange={closeImgHandler} 
          backdrop="blur"
          className={`rounded-lg bg-white border border-slate-300 items-start z-[2000]`}
          style={{width:"800px",maxWidth:'100vw'}}
          closeButton
        >
        <ModalContent className="modal-content">
          {(onClose) => 
            <>
              <ModalHeader className="flex flex-col gap-1 w-full py-3 text-center">{title}</ModalHeader>
              <ModalBody className="w-full">
                <div className="tabs">
                  {select.imgTab == 'current' && 
                    <>
                      <div className="image-tools pb-2">
                        <div className="grid grid-cols-4 gap-4">
                        <div>
                          <div className="rounded p-1 border border-slate-300">
                            {select.preview && <div className="h-30 w-full relative flex align-middle content-center items-center"><img className="preview w-full" alt="preview" src={select.preview}/></div> }
                            {!select.preview && <div className="h-30 w-full relative flex justify-center items-center">Prview</div>}
                          </div>
                        </div>
                        <div className="col-span-4">
                          <div className="flex">
                              <input
                                type="text"
                                placeholder={"Image URL"}
                                onKeyUp={select.previewImg}
                                name="url"
                                value={select.preview}
                                className="bg-white w-full rounded-s border-[1.5px] border-stroke bg-transparent p-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                              />
                              <Button 
                                  className="inline-flex items-center bg-transparent hover:bg-slate-200 border-[1.5px] border-l-0 border-stroke rounded-e-lg dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" 
                                  onClick={()=>select.setImgTab('select')}><MdOutlineSearch />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="col-span-2">
                            <label className="text-sm" htmlFor="label">alt:</label>
                            <input
                              type="text"
                              placeholder={"alt"}
                              id="label"
                              className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent p-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="text-sm" htmlFor="width">width:</label>
                            <input
                              type="text"
                              placeholder={"width"}
                              id="width"
                              className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent p-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="text-sm" htmlFor="height">height:</label>
                            <input
                              type="text"
                              placeholder={"height"}
                              id="height"
                              className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent p-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-3">
                          <div className="flex items-center mb-4">
                              <input 
                                id="default-checkbox" 
                                onChange={SetImageTitle} 
                                type="checkbox" 
                                value="" 
                                className="w-4 h-4 outline-none text-blue-600 bg-slate-100 border-slate-300 rounded dark:bg-slate-700 dark:border-slate-600" 
                              />
                              <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-slate-900 dark:text-slate-300">Image title</label>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="col-span-2">
                            <input
                              type="text"
                              placeholder={"Image title"}
                              //@ts-ignore
                              disabled={imgTitile}
                              
                              className="bg-white w-full rounded-s border-[1.5px] border-stroke bg-transparent p-1 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  {select.imgTab == 'select' &&
                      <>
                        <div className="image-tools flex justify-between border-b border-slate-200 pb-2">
                          <div className="tabs justify-start ">
                            <Button 
                                className="bg-slate-50 hover:bg-slate-200 rounded-lg px-3 h-7" 
                                onClick={()=>select.setImgTab('upload')}><MdCloudUpload/>Upload
                            </Button>
                          </div>
                          <div className="actions justify-end">
                            <Button 
                              className={`${select.imgCount>0?`bg-slate-400 text-white hover:bg-slate-600`:`bg-slate-100`} rounded-lg px-3 h-7`} 
                              disabled={select.imgCount>0?false:true}
                              onClick={()=>{
                                select.imgUnselect();
                                select.setImgCount(0);
                              }}
                            >Unselect</Button>
                            <Button className={`${select.imgCount>0?`bg-rose-400 text-white hover:bg-red`:`bg-slate-100`} rounded-lg px-3 h-7 ml-2`} disabled={select.imgCount>0?false:true}>
                              Delete
                            </Button>
                          </div>
                        </div>
                        <div className="images-gallery p-1" style={{height:'500px',maxHeight:'500px',overflowY:'auto'}}>
                          <div className="grid grid-cols-12 gap-4">
                            {Array.from(mediaImages).map((v:any, k:any) =>
                              <div 
                                key={k} 
                                className="col-span-2 rounded overflow-hidden bg-slate-100 cursor-pointer transition-all duration-300 ease-in-out"
                                onClick={(e)=>select.Select(e)}
                              >
                                <div className="h-full relative flex align-middle content-center items-center min-h-24">
                                  <img src={`/${v.src}`} alt={v.alt} style={{height:'min-content'}}/>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    }
                    {select.imgTab == 'upload' &&
                      <>
                        <div className="image-tools flex justify-between pb-2">
                          <Button className="bg-slate-50 hover:bg-slate-200 rounded-lg px-3 h-7" onClick={()=>select.setImgTab('select')}><MdArrowBackIos/> Back</Button>
                        </div>
                        <div className="images-upload" style={{height:'500px',maxHeight:'500px',overflowY:'auto'}}>
                          <div className="input-group bg-slate-50 h-full border-2 border-dashed border-slate-200 rounded-lg">
                            <label 
                              className={`w-full ${!selectedImage?`h-full `:`h-10 `}flex items-center justify-center font-bold`} 
                              htmlFor="file_input"
                            >Select File</label>
                            <input 
                              onChange={handleFileUpload}
                              className="hidden" 
                              id="file_input" 
                              type="file"
                              multiple={true}
                            />
                            {selectedImage && 
                              <div className="grid grid-cols-12 gap-4 mx-2">
                                {Array.from(selectedImage).map((v:any,k:any) => <div className="relative col-span-6 p-1 bg-slate-100 border border-slate-200 rounded-lg img-selected" key={k}>
                                  <div className="flex">
                                    <div className="w-28 h-28 bg-white flex items-center justify-center rounded-lg">
                                      <img
                                        src={v.src}
                                        className="h-auto object-cover"
                                        alt="Thumb"
                                        width="150"
                                      />
                                    </div>
                                    <div className="p-2 text-sm">
                                      <p className="font-bold">
                                        {v.name}
                                      </p>
                                      <p className="mt-1">Size: {formatFileSize(v.size)}</p>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={()=>removeElementAt(k)} 
                                    className="absolute bg-red text-white rounded-lg top-1 right-1 w-6 h-6">
                                    X
                                  </button>
                                </div>
                                )}
                              </div>
                            }
                          </div>
                        </div>
                      </>
                  }
                </div>
              </ModalBody>
              <ModalFooter className="w-full">
              {select.imgTab == 'current' &&
                  <>
                    <Button 
                      onClick={(e)=>select.insertImg(e)}
                      // onPress={onClose}
                      className={`bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Save
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onPress={onClose}>
                      Cancel
                    </Button>
                  </>
                }
                {select.imgTab == 'select' &&
                  <>
                    <Button 
                      onClick={(e)=>select.copyToSelect(e)}
                      // onPress={onClose}
                      className={`bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Select
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onClick={()=>{onClose; select.setImgTab('current')}}>
                      Cancel
                    </Button>
                  </>
                }
                {select.imgTab == 'upload' && <>
                    <Button 
                      // onClick={select.insertImg}
                      // onPress={onClose}
                      className={`${selectedImage?`bg-blue-500`:`bg-blue-200`} text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Upload
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onClick={()=>{onClose; select.setImgTab('current')}}>
                      Cancel
                    </Button>
                  </>
                }
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
}