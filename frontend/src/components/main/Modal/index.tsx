"use client"
import {
  ModalContent,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button
} from "@nextui-org/react";

export default function ModalDialog({visible, closeHandler, title, select}:any) {
  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal 
          isOpen={visible} 
          onOpenChange={closeHandler} 
          backdrop="blur"
          className={`rounded-lg bg-white border border-slate-300 z-[2000]`}
          style={{width:"600px",maxWidth:'100vw'}}
          closeButton
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <div className="bg-stripes-pink" style={{
                  borderRadius: '10px',
                  backgroundColor: '#9772f41a',
                  backgroundImage: 'linear-gradient(135deg, #6148ec80 10%, #0000 0, #0000 50%, #6148ec80 0, #6148ec80 60%, #0000 0, #0000',
                  backgroundSize: '7.07px 7.07px'
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-12 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">text</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-4 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-8 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">text</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-4 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-4 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-4 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-3 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                    <span className="col-span-6 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">text</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-8 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">text</span>
                    <span className="col-span-4 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-6 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">text</span>
                    <span className="col-span-6 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 rounded-lg hover:ring hover:ring-indigo-500" onClick={select.handleSetSelect}>
                    <span className="col-span-12 border-dashed bg-indigo-400 flex justify-center rounded-lg text-white font-bold p-2">image</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button 
                  onPress={onClose} 
                  className="bg-blue-200 text-white font-bold hover:bg-blue-700 focus:ring focus:ring-blue-300 rounded-lg">
                  Select
                </Button>
                <Button 
                  variant="light" 
                  className="text-slate-400 font-bold rounded-lg hover:text-rose-500 hover:bg-rose-100 focus:ring focus:ring-rose-300" 
                  onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
