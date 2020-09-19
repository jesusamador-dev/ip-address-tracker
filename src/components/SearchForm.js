import React, { useContext, useEffect, useState } from 'react';
import useGetIp from '../hooks/useGetIp';
import IpContext from '../context/IpContext';

const SearchForm = () => {
  const { info, setInfo }=useContext(IpContext);
  console.log(info);
  const [form, setForm] = useState({ search: '' });
  const [ip, setIp] = useState("");
  const data = useGetIp(ip);
  useEffect(() => {
    setForm({
      search: data?.ip
    });
    if (data) {
      setInfo(data);
    }
  }, [data]);
  
  const handlerForm = (e) => {
    e.preventDefault();
    setIp(form.search);
  }

  const handleInputChange=(event) => {
    const search = event.target.value;
    setForm({
      ...form,
      search
    });
  }

  return (
    <>
      <form method="POST" className="form" onSubmit={handlerForm}>
        <div className="form__group">
          <input type="text" name="search" value={form.search} onChange={handleInputChange} />
          <button type="submit">
            <i className="icon-arrow"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;