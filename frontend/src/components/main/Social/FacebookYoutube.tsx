import { FaFacebookF } from "react-icons/fa";

export default function FacebookYoutube() {
  return <>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 mb-20">
        <div className="col-span-6">
            <h3 className="font-bold text-2xl">
              <div className="flex">
                <div className="bg-blue-500 rounded">
                  <span><FaFacebookF className=" text-slate-100"/></span>
                  <span>Facebook</span>
                </div>
                </div>
            </h3>
        </div>
        <div className="col-span-6">
            <h3 className="font-bold text-2xl">Youtube</h3>
        </div>
    </div>
  </>;
}