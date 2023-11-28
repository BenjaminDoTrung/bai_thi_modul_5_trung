import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Create(){
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    return (
        <>
            <h1>Create Product</h1>
            <Formik initialValues={{
                title: "",
                description: "",
                price: "",
            }}
                    onSubmit={(value) => {
                        CreateProduct(value)
                        console.log(value)
                        navigate("/");
                    }}>
                    <Form style={{margin: 'auto'}}>
                        <div>
                            <p>Tên</p>
                            <Field style={{width: '200px'}} type={"text"} placeholder="title" name={'title'} className={"form-control "} required/>
                            <p>Mô Tả</p>
                            <Field style={{width: '200px'}} type={"text"} placeholder="content" name={'description'} className={"form-control"} required/>
                            <p>Giá</p>
                            <Field style={{width: '200px'}} type={"text"} placeholder="created_At" name={'price'} className={"form-control"} required/>
                            <button>Thêm</button>
                        </div>
                    </Form>
            </Formik>
        </>

    )
    function CreateProduct(value){
        axios.post('http://localhost:3000/products',value).then(res => {
            setList(res.data)
            alert("Oke Done")
        })
    }
}
export default Create