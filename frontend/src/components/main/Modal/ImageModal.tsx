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
import { MdCloudUpload, MdArrowBackIos } from "react-icons/md";

const mediaImages = [
  {"src":"Rectangle 114.png","alt":"Rectangle 114"},
  {"src":"Rectangle 136.png","alt":"Rectangle 136"},
  {"src":"Rectangle 137.png","alt":"Rectangle 137"},
  {"src":"Rectangle 138.png","alt":"Rectangle 138"},
  {"src":"Rectangle 139.png","alt":"Rectangle 139"},
  {"src":"Rectangle 147.png","alt":"Rectangle 147"},
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};





 
export default function ImageModal({imgVisible, closeImgHandler, title, select}:any)
{
    const [selectedImage, setSelectedImage] = useState('');
    const handleFileUpload = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
    }
    const removeSelectedImage = () => {
      setSelectedImage('');
    };
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
        <ModalContent>
          {(onClose) => 
            <>
              <ModalHeader className="flex flex-col gap-1 w-full py-3 text-center">{title}</ModalHeader>
              <ModalBody className="w-full">
                <div className="tabs">
                  {
                    select.imgTab == 'current' ?
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
                            >
                              Unselect
                            </Button>
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
                                onClick={(e)=>select.Select(e.currentTarget)}
                              >
                                <div className="h-full relative flex align-middle content-center items-center min-h-24">
                                  <img src={`/${v.src}`} alt={v.alt} style={{height:'min-content'}}/>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    :
                      <>
                        <div className="image-tools flex justify-between border-b border-slate-200 pb-2">
                          <Button className="bg-slate-50 hover:bg-slate-200 rounded-lg px-3 h-7" onClick={()=>select.setImgTab('current')}><MdArrowBackIos/> Back</Button>
                        </div>
                        <div className="images-upload" style={{height:'500px',maxHeight:'500px',overflowY:'auto'}}>
                          <div className="input-group h-full">
                            <label 
                              className="w-full h-full flex items-center justify-center" 
                              htmlFor="file_input">Select file</label>
                            <input 
                              onChange={handleFileUpload}
                              className="hidden" 
                              id="file_input" 
                              type="file" />
                          </div>
                          {selectedImage && (
                            <div style={styles.preview}>
                              <img
                                src={URL.createObjectURL(selectedImage)}
                                style={styles.image}
                                alt="Thumb"
                              />
                              <button onClick={removeSelectedImage} style={styles.delete}>
                                Remove This Image
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                  }
                </div>
              </ModalBody>
              <ModalFooter className="w-full">
                {select.imgTab == 'current' ?
                  <>
                    <Button 
                      onClick={select.insertImg}
                      // onPress={onClose}
                      className={`bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Select
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onPress={onClose}>
                      Cancel
                    </Button>
                  </>
                  :<>
                    <Button 
                      // onClick={select.insertImg}
                      // onPress={onClose}
                      className={`bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg`}>
                      Upload
                    </Button>
                    <Button 
                      variant="light" 
                      className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                      onClick={()=>select.setImgTab('current')}>
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