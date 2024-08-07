import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SearchBar, DropDownMurottal, Loading, OneSurat, PaginationSurat, Footer } from '../../components';
import { getSurat, handleSearchSurat, searchSurat } from '../../features/surat';
import ReactGA from "react-ga4";


const Surat = () => {
  const { isLoading, surat, lastPage, firstPage, isActive, types, search, allSurat } = useSelector((store) => store.surat);
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    ReactGA.event("page_view", {
      page: "Surat",
    });
  }, []);

  useEffect(() => {
    dispatch(handleSearchSurat(''));
  }, []);
  
  useEffect(() => {
    const newSurat = allSurat?.map((item) => {
      return item;
    });
    const result = newSurat.filter((item) => {
      return item.namaLatin.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(searchSurat(result));
  }, [search, allSurat]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className={`${isActive && 'mb-32'} container-surat `}>
      <SearchBar title={types} />
      <div>
        <DropDownMurottal />
      </div>

      <hr />
      <div>
        {surat?.slice(firstPage, lastPage).map((item, index) => {
          return <OneSurat key={index} {...item} />;
        })}
      </div>
      {surat.length === 0 ? <h1 className="text-center my-10 dark:text-cyan">Tidak ada surat yang dicari !</h1> : <PaginationSurat />}
      <Footer />
    </main>
  );
};

export default Surat;
