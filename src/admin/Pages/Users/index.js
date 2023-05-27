  //eslint-disable-next-line
import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import SideMenu from "../../SideMenu";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const handleRemove=async (id)=>{
    const response = await fetch(`http://localhost:5000/api/auth/delete-user/${id}`, {
      method: "DELETE"
  });
  //eslint-disable-next-line
  const json= await response.json();
  const newUser = dataSource.filter((data) => { return data._id !== id })
  setDataSource(newUser);
  console.log("Removed")
  }

  const gotit = async () => {
    //API Call
    const response = await fetch(
      "http://localhost:5000/api/auth/getalluser",
      {
        method: "GET"
      });
    const data = await response.json();
    setLoading(true)
    setDataSource(data);
  };

  useEffect(() => {
    gotit();
  }, [])
  return (
    <>
      <SideMenu />
      <b className="container fs-2">USERS</b>
      <div className="container">
        
      <Space size={20} direction="vertical">
      <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%" loading={loading}         pagination={{
          pageSize: 5,
        }}>
        <thead>
          <tr>
            <th className="th-sm">Name</th>
            <th className="th-sm">Email Address</th>
            <th className="th-sm">Contact</th>
            <th className="th-sm">Created</th>
            <th className="th-sm">User Type</th>
            <th className="th-sm">Action</th>
          </tr>
        </thead>
          {dataSource.map((data) => {
            return <tbody>
              <tr >
                <td >{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.date}</td>
                <td>{data.UserType}</td>
                <td><button type="button" className="btn btn-danger m-3" onClick={()=>{handleRemove(data._id)}}>Remove</button></td>
              </tr>
            </tbody>
          })}
      </table>
      </Space>
      </div>
    </>
  );
}

export default Customers;
