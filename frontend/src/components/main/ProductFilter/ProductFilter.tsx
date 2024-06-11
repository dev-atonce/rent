import Dropdown from "../Dropdown/Dropdown";

export default function ProductFilter({
  subCat,
  mainCat,
  filter,
  setFilter,
  onClear,
  onSearch,
}: any) {
  return (
    <div className="p-4">
      <div className="w-full flex flex-col gap-4 border-slate-100 border shadow-md rounded-lg p-6">
        <h5 className="text-2xl text-[#0DA1DB] font-semibold">ค้นหาสินค้า</h5>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-4 col-span-12">
            <Dropdown
              list={mainCat}
              label="หมวดหมู่"
              topLabel={false}
              selectedOption={filter}
              setSelectedOption={setFilter}
              keyProp="mainCategory"
              status={false}
            />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Dropdown
              list={subCat}
              label="ประเภท"
              topLabel={false}
              selectedOption={filter}
              setSelectedOption={setFilter}
              keyProp="subCategory"
              status={filter?.mainCategory ? false : true}
            />
          </div>
          <input
            value={filter?.keyword}
            onChange={(e: any) => setFilter(e?.target?.value, "keyword")}
            type="text"
            placeholder="คำค้นหา"
            className="focus:ring-0 focus:outline-none lg:col-span-4 col-span-12 bg-slate-100 rounded-md px-4 py-2"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 w-full">
          <button
            className="py-2 px-10 bg-orange-500 rounded-lg text-white md:w-fit w-full"
            onClick={onClear}
          >
            รีเซ็ต
          </button>
          <button
            className="py-2 px-10 bg-[#0DA1DB] rounded-lg text-white md:w-fit w-full"
            onClick={onSearch}
          >
            ค้นหา
          </button>
        </div>
      </div>
    </div>
  );
}
