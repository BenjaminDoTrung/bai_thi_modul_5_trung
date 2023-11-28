import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res)=>{
            setList(res.data);
        })
    }, []);
    return (
        <>
            <button className="btn btn-primary" onClick={()=>{
                navigate('/create')
            }}>Thêm mới</button>
            <br/>
            <table className="table">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col"> Giá</th>
                    <th scope="col" colSpan="2"></th>
                </tr>
                {list.map((i, key) => {
                    return (
                        <tr>
                            <th scope="row" key={key}>{i.id}</th>
                            <td><Link to={'/view/' + i.id}>{i.title}</Link></td>
                            <td>{i.description}</td>
                            <td>{i.price}</td>
                            <td>
                                <button style={{color: 'white', backgroundColor: 'blue'}} className="btn btn-primary" onClick={()=>{
                                    navigate('/delete/'+ i.id)
                                }}>
                                    Xóa
                                </button>
                            </td>
                            <td>
                                <button style={{color: 'white', backgroundColor: 'blue'}} className="btn btn-primary" onClick={()=>{
                                    navigate('/update/' + i.id)
                                }}>
                                    Sửa
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};

export default Home;